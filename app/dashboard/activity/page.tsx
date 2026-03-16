import { JobMonitor } from '@/components/jobs/job-monitor';
import PageHeader from '@/components/ui/PageHeader';

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Background Jobs"
        paragraph="Monitor sync and processing jobs"
      />

      <JobMonitor />
    </div>
  );
}
