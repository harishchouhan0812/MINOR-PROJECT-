import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const AdminModelMonitoring = () => (
  <div>
    <PageHeader title="Model Monitoring" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">ML Model Monitoring</CardContent></Card>
  </div>
);
export default AdminModelMonitoring;
