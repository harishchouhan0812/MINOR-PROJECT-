import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
import { Target } from 'lucide-react';

const StudentStudyPlan: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Study Plan"
        description="Create and manage your personalized study schedule"
        action={<SyntheticDataLabel />}
      />
      <Card>
        <CardContent className="text-center py-12">
          <Target className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Study Plan Page
          </h3>
          <p className="text-gray-600">
            This page will help you create and track your study goals and schedules
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentStudyPlan;
