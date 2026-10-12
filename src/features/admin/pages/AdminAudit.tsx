import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const AdminAudit = () => (
  <div>
    <PageHeader title="Audit Log" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">System Audit Trail</CardContent></Card>
  </div>
);
export default AdminAudit;
