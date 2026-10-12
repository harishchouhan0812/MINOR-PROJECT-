import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
import { BarChart3 } from 'lucide-react';

const FacultyAnalytics: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Class Analytics"
        description="View detailed performance analytics for your classes"
        action={<SyntheticDataLabel />}
      />
      <Card>
        <CardContent className="text-center py-12">
          <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
          <p className="text-gray-600">Comprehensive class performance metrics</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FacultyAnalytics;
