import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const HODSubjects = () => (
  <div>
    <PageHeader title="Subjects" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Subject Management</CardContent></Card>
  </div>
);
export default HODSubjects;
