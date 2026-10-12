import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
import { Library } from 'lucide-react';

const StudentResources: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Learning Resources"
        description="Access study materials, guides, and learning resources"
        action={<SyntheticDataLabel />}
      />
      <Card>
        <CardContent className="text-center py-12">
          <Library className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Resources Page
          </h3>
          <p className="text-gray-600">
            This page will provide access to learning materials and study resources
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentResources;
