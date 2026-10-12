import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const AdminDataManagement = () => (
  <div>
    <PageHeader title="Data Management" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Data Management Tools</CardContent></Card>
  </div>
);
export default AdminDataManagement;
