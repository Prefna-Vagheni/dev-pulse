import { InsightGenerator } from '@/components/ai/insight-generator';
import PageHeader from '@/components/ui/PageHeader';

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Insights"
        paragraph="Get personalized insights powered by Google Gemini"
      />

      <InsightGenerator />
    </div>
  );
}
