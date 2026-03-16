import { useState, useEffect, useCallback } from 'react';

export function useJobStats(autoRefreshInterval = 5000) {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch('/api/jobs/stats');
      const data = await response.json();
      setStats(data.queues);
    } catch (error) {
      console.error('Error fetching job stats:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await fetchStats();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(fetchStats, autoRefreshInterval);
    return () => clearInterval(interval);
  }, [autoRefresh, fetchStats, autoRefreshInterval]);

  return {
    stats,
    isLoading,
    autoRefresh,
    setAutoRefresh,
    isRefreshing,
    handleManualRefresh,
  };
}
