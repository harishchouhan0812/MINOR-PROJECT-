import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
import { Briefcase } from 'lucide-react';

const FacultyInterventions: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Interventions"
        description="Manage student support interventions"
        action={<SyntheticDataLabel />}
      />
      <Card>
        <CardContent className="text-center py-12">
          <Briefcase className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Interventions</h3>
          <p className="text-gray-600">Create and track support interventions</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FacultyInterventions;
