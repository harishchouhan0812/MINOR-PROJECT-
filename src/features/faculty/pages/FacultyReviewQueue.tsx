import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
import { ListChecks } from 'lucide-react';

const FacultyReviewQueue: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Review Queue"
        description="Students requiring academic review"
        action={<SyntheticDataLabel />}
      />
      <Card>
        <CardContent className="text-center py-12">
          <ListChecks className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Queue</h3>
          <p className="text-gray-600">Academic review and intervention workflow</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FacultyReviewQueue;
