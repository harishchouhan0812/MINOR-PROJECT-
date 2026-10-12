import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const HODAnalytics = () => (
  <div>
    <PageHeader title="Department Analytics" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Analytics Dashboard</CardContent></Card>
  </div>
);
export default HODAnalytics;
