import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const MentorMeetings = () => (
  <div>
    <PageHeader title="Meetings" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Meeting Schedule</CardContent></Card>
  </div>
);
export default MentorMeetings;
