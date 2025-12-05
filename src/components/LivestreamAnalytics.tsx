import { Card } from '@/components/ui/card';
import { useLivestreamAnalytics } from '@/hooks/useLivestreamAnalytics';
import { Eye, BarChart3, Users, Globe } from 'lucide-react';

export function LivestreamAnalytics() {
  const { analytics, isLoading } = useLivestreamAnalytics();

  if (isLoading) {
    return (
      <Card className="p-6 border-2 border-accent animate-pulse">
        <div className="h-32 bg-muted rounded"></div>
      </Card>
    );
  }

  return (
    <Card className="p-6 border-2 border-accent">
      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
        <BarChart3 className="h-5 w-5" />
        Livestream Statistics
      </h3>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Live Viewers */}
        <div className="text-center p-3 bg-primary/10 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-primary mb-1">
            <Eye className="h-4 w-4" />
            <span className="text-2xl font-bold">{analytics.liveViewers}</span>
          </div>
          <p className="text-xs text-muted-foreground">Watching Now</p>
        </div>

        {/* Total Views */}
        <div className="text-center p-3 bg-accent/10 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-accent mb-1">
            <BarChart3 className="h-4 w-4" />
            <span className="text-2xl font-bold">{analytics.totalViews}</span>
          </div>
          <p className="text-xs text-muted-foreground">Total Views</p>
        </div>

        {/* Unique Viewers */}
        <div className="text-center p-3 bg-secondary/50 rounded-lg">
          <div className="flex items-center justify-center gap-1 text-foreground mb-1">
            <Users className="h-4 w-4" />
            <span className="text-2xl font-bold">{analytics.uniqueViewers}</span>
          </div>
          <p className="text-xs text-muted-foreground">Unique Viewers</p>
        </div>
      </div>

      {/* Regional Breakdown */}
      {analytics.topCountries.length > 0 && (
        <div className="border-t border-border pt-4">
          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1">
            <Globe className="h-4 w-4" />
            Viewers by Region
          </h4>
          <div className="space-y-2">
            {analytics.topCountries.map((item, index) => (
              <div key={item.country} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {index + 1}. {item.country}
                </span>
                <span className="font-medium text-foreground">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
