'use client';

import { useState, useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { subDays } from 'date-fns';
import { DateRangePicker } from '@/components/analytics/date-range-picker';
import { ProductivityTrendsChart } from '@/components/charts/productivity-trend-chart';
import { BestCodingTime } from '@/components/analytics/best-coding-time';
import PageHeader from '@/components/ui/PageHeader';

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState<any[]>([]);

  // useEffect(() => {
  //   fetchActivities();
  // }, []);
  // useEffect(() => {
  //   fetchData();
  //   fetchActivities();
  // }, [dateRange]);

  const fetchActivities = async () => {
    // const response = await fetch('/api/analytics/timeline?limit=1000');
    // const data = await response.json();
    // setActivities(data);
    // setIsLoading(true);

    try {
      const params = new URLSearchParams();
      params.set('limit', '1000');

      if (dateRange?.from) params.set('from', dateRange.from.toISOString());
      if (dateRange?.to) params.set('to', dateRange.to.toISOString());
      // params.set('limit', '1000');

      // const response = await fetch('/api/analytics/timeline?limit=1000');
      const response = await fetch(
        `/api/analytics/timeline?${params.toString()}`,
      );
      const result = await response.json();
      // Ensure we only set the state if the result is actually an array
      // setActivities(Array.isArray(result) ? result : []);
      setActivities(Array.isArray(result.timeline) ? result.timeline : []);
    } catch (error) {
      console.error('Failed to fetch activities:', error);
      setActivities([]); // Fallback to empty array on network error
    }
    // finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    fetchData();
    fetchActivities();
  }, [dateRange]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (dateRange?.from) params.set('from', dateRange.from.toISOString());
      if (dateRange?.to) params.set('to', dateRange.to.toISOString());

      const response = await fetch(`/api/analytics/daily-stats?${params}`);
      const result = await response.json();
      setData(result.stats || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Advanced Analytics"
          paragraph="Deep dive into your productivity patterns"
        />

        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <ProductivityTrendsChart data={data} />
          <BestCodingTime activities={activities} />
        </div>
      )}
    </div>
  );
}
