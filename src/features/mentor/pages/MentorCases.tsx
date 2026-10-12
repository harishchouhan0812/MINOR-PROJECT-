import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const MentorCases = () => (
  <div>
    <PageHeader title="Support Cases" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Cases Management</CardContent></Card>
  </div>
);
export default MentorCases;
