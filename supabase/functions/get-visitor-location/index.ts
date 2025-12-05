import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get IP from headers (Supabase provides this)
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
    
    console.log('Visitor IP:', ip);

    // Skip geolocation for localhost/private IPs
    if (ip === 'unknown' || ip === '127.0.0.1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
      return new Response(JSON.stringify({
        country: 'Unknown',
        region: 'Unknown',
        city: 'Unknown',
        ip: ip
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Call ip-api.com for geolocation (free, no API key needed)
    const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,regionName,city`);
    const geoData = await geoResponse.json();

    console.log('Geolocation data:', geoData);

    if (geoData.status === 'success') {
      return new Response(JSON.stringify({
        country: geoData.country || 'Unknown',
        region: geoData.regionName || 'Unknown',
        city: geoData.city || 'Unknown',
        ip: ip
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fallback if geolocation fails
    return new Response(JSON.stringify({
      country: 'Unknown',
      region: 'Unknown',
      city: 'Unknown',
      ip: ip
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error getting visitor location:', error);
    return new Response(JSON.stringify({
      country: 'Unknown',
      region: 'Unknown',
      city: 'Unknown',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 200, // Still return 200 to not break the frontend
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
