import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface LocationData {
  country: string;
  region: string;
  city: string;
}

interface Analytics {
  liveViewers: number;
  totalViews: number;
  uniqueViewers: number;
  topCountries: { country: string; count: number }[];
}

export function useLivestreamAnalytics() {
  const [analytics, setAnalytics] = useState<Analytics>({
    liveViewers: 0,
    totalViews: 0,
    uniqueViewers: 0,
    topCountries: []
  });
  const [isLoading, setIsLoading] = useState(true);

  // Generate or retrieve session ID
  const getSessionId = useCallback(() => {
    let sessionId = sessionStorage.getItem('livestream_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem('livestream_session_id', sessionId);
    }
    return sessionId;
  }, []);

  // Fetch visitor location from edge function
  const fetchLocation = async (): Promise<LocationData> => {
    try {
      const { data, error } = await supabase.functions.invoke('get-visitor-location');
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching location:', error);
      return { country: 'Unknown', region: 'Unknown', city: 'Unknown' };
    }
  };

  // Record page visit
  const recordVisit = useCallback(async () => {
    const sessionId = getSessionId();
    const hasRecorded = sessionStorage.getItem('livestream_visit_recorded');
    
    if (hasRecorded) return; // Only record once per session

    try {
      const location = await fetchLocation();
      
      await supabase.from('livestream_views').insert({
        session_id: sessionId,
        country: location.country,
        region: location.region,
        city: location.city,
        user_agent: navigator.userAgent
      });

      sessionStorage.setItem('livestream_visit_recorded', 'true');
      console.log('Visit recorded:', location);
    } catch (error) {
      console.error('Error recording visit:', error);
    }
  }, [getSessionId]);

  // Fetch analytics data
  const fetchAnalytics = useCallback(async () => {
    try {
      // Get total views
      const { count: totalViews } = await supabase
        .from('livestream_views')
        .select('*', { count: 'exact', head: true });

      // Get unique viewers (by session_id)
      const { data: uniqueData } = await supabase
        .from('livestream_views')
        .select('session_id');
      
      const uniqueViewers = new Set(uniqueData?.map(d => d.session_id)).size;

      // Get top countries
      const { data: countryData } = await supabase
        .from('livestream_views')
        .select('country');

      const countryCounts: Record<string, number> = {};
      countryData?.forEach(d => {
        if (d.country && d.country !== 'Unknown') {
          countryCounts[d.country] = (countryCounts[d.country] || 0) + 1;
        }
      });

      const topCountries = Object.entries(countryCounts)
        .map(([country, count]) => ({ country, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setAnalytics(prev => ({
        ...prev,
        totalViews: totalViews || 0,
        uniqueViewers,
        topCountries
      }));
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  }, []);

  // Setup real-time presence for live viewers
  useEffect(() => {
    const sessionId = getSessionId();
    
    const channel = supabase.channel('livestream-presence', {
      config: { presence: { key: sessionId } }
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const liveCount = Object.keys(state).length;
        setAnalytics(prev => ({ ...prev, liveViewers: liveCount }));
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({ online_at: new Date().toISOString() });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [getSessionId]);

  // Record visit and fetch analytics on mount
  useEffect(() => {
    recordVisit();
    fetchAnalytics();
    setIsLoading(false);

    // Refresh analytics every 30 seconds
    const interval = setInterval(fetchAnalytics, 30000);
    return () => clearInterval(interval);
  }, [recordVisit, fetchAnalytics]);

  return { analytics, isLoading, refetch: fetchAnalytics };
}
