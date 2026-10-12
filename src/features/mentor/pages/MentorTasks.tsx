import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const MentorTasks = () => (
  <div>
    <PageHeader title="Tasks" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Task Management</CardContent></Card>
  </div>
);
export default MentorTasks;
