import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
import { FileText } from 'lucide-react';

const FacultyReports: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Reports"
        description="Generate and export academic reports"
        action={<SyntheticDataLabel />}
      />
      <Card>
        <CardContent className="text-center py-12">
          <FileText className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Reports</h3>
          <p className="text-gray-600">Academic reports and data export</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FacultyReports;
