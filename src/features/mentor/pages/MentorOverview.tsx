import React from 'react';
import { PageHeader, SyntheticDataLabel, StatCard } from '../../../components/shared';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui';
import { Users, Briefcase, Calendar } from 'lucide-react';
import { getStudentsByMentor, getCasesByMentor, initialTasks } from '../../../data';
import { useAuth } from '../../../hooks/useAuth';

export const MentorOverview: React.FC = () => {
  const { user } = useAuth();
  const assignedStudents = user ? getStudentsByMentor(user.id) : [];
  const cases = user ? getCasesByMentor(user.id) : [];
  const myTasks = initialTasks.filter(t => t.assignedTo === user?.id);

  return (
    <div>
      <PageHeader title="Mentor Dashboard" description="Monitor your assigned students" action={<SyntheticDataLabel />} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Assigned Students" value={assignedStudents.length} icon={Users} iconColor="text-blue-600" />
        <StatCard title="Active Cases" value={cases.filter(c => c.status === 'in-progress').length} icon={Briefcase} iconColor="text-orange-600" />
        <StatCard title="Pending Tasks" value={myTasks.filter(t => t.status === 'pending').length} icon={Calendar} iconColor="text-purple-600" />
      </div>
    </div>
  );
};
