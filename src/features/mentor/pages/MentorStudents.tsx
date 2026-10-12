import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const MentorStudents = () => (
  <div>
    <PageHeader title="My Students" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">My Students Page</CardContent></Card>
  </div>
);
export default MentorStudents;
