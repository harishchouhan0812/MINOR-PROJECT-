import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../../../components/ui';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { AlertTriangle } from 'lucide-react';
import { initialAlerts, students } from '../../../data';
import { formatDate } from '../../../utils';

export const FacultyAlerts: React.FC = () => {
  const [alerts] = useState(initialAlerts);

  return (
    <div>
      <PageHeader
        title="Alerts"
        description="Manage academic alerts and notifications"
        action={<SyntheticDataLabel />}
      />

      <Card>
        <CardHeader>
          <CardTitle>Academic Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Alert</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead align="right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alerts.map((alert) => {
                const student = students.find((s) => s.id === alert.studentId);
                return (
                  <TableRow key={alert.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{student?.displayName}</p>
                        <p className="text-sm text-gray-600">{alert.studentId}</p>
                      </div>
                    </TableCell>
                    <TableCell>{alert.description}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          alert.severity === 'critical' || alert.severity === 'high'
                            ? 'error'
                            : 'warning'
                        }
                      >
                        {alert.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(alert.createdAt)}</TableCell>
                    <TableCell>
                      <Badge variant={alert.status === 'new' ? 'warning' : 'info'}>
                        {alert.status}
                      </Badge>
                    </TableCell>
                    <TableCell align="right">
                      <Button size="sm">Review</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
