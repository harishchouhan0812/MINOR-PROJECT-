import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const AdminDepartments = () => (
  <div>
    <PageHeader title="Departments" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Department Management</CardContent></Card>
  </div>
);
export default AdminDepartments;
