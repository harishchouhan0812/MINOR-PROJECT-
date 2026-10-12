import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const HODReports = () => (
  <div>
    <PageHeader title="Reports" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Department Reports</CardContent></Card>
  </div>
);
export default HODReports;
