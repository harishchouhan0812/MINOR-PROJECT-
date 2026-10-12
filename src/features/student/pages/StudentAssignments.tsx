import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardHeader, CardTitle, CardContent, Badge } from '../../../components/ui';
import { ClipboardList, Calendar, AlertCircle } from 'lucide-react';

const StudentAssignments: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Assignments"
        description="Track your assignments and submission status"
        action={<SyntheticDataLabel />}
      />
      <Card>
        <CardContent className="text-center py-12">
          <ClipboardList className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Assignments Page
          </h3>
          <p className="text-gray-600">
            This page will display your assignments, deadlines, and submission status
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentAssignments;
