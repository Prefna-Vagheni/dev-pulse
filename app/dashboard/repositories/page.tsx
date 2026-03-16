import { RepositoriesListGraphQL } from '@/components/graphql/repositories-list-gql';
import PageHeader from '@/components/ui/PageHeader';

export default function RepositoriesGraphQLPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Repositories (GraphQL)"
        paragraph="Powered by Apollo Client and GraphQL"
      />

      <RepositoriesListGraphQL />
    </div>
  );
}
