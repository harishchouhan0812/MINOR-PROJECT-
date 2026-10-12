import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const AdminUsers = () => (
  <div>
    <PageHeader title="Users" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">User Management</CardContent></Card>
  </div>
);
export default AdminUsers;
