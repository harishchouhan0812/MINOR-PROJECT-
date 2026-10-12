import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const AdminSettings = () => (
  <div>
    <PageHeader title="Settings" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">System Configuration</CardContent></Card>
  </div>
);
export default AdminSettings;
