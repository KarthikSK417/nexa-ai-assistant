import AppLayout from '@/components/layout/AppLayout';
import {
  CalendarCheck,
  FileText,
  Shield,
  MessageCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Upcoming Appointments', value: '3', icon: CalendarCheck, color: 'text-primary bg-primary/10' },
  { label: 'Case Records', value: '12', icon: FileText, color: 'text-accent bg-accent/10' },
  { label: 'Insurance Claims', value: '2 Active', icon: Shield, color: 'text-warning bg-warning/10' },
  { label: 'Consultations', value: '8', icon: MessageCircle, color: 'text-info bg-info/10' },
];

const upcomingAppointments = [
  { doctor: 'Dr. Sarah Wilson', specialty: 'Cardiologist', date: 'Mar 5, 2026', time: '10:00 AM', avatar: 'SW' },
  { doctor: 'Dr. James Chen', specialty: 'Dermatologist', date: 'Mar 8, 2026', time: '2:30 PM', avatar: 'JC' },
  { doctor: 'Dr. Emily Brown', specialty: 'General Physician', date: 'Mar 12, 2026', time: '11:00 AM', avatar: 'EB' },
];

const recentRecords = [
  { title: 'Blood Test Report', date: 'Feb 28, 2026', type: 'Lab Report' },
  { title: 'Annual Checkup', date: 'Feb 15, 2026', type: 'Consultation' },
  { title: 'X-Ray - Chest', date: 'Jan 20, 2026', type: 'Imaging' },
];

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Good Morning, John 👋</h1>
          <p className="text-muted-foreground mt-1">Here's your health overview for today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-display font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border border-border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-display">Upcoming Appointments</CardTitle>
                <Link to="/appointments" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingAppointments.map((apt) => (
                <div key={apt.doctor} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">{apt.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{apt.doctor}</p>
                    <p className="text-xs text-muted-foreground">{apt.specialty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground">{apt.date}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" /> {apt.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-border shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-display">Recent Records</CardTitle>
                <Link to="/case-history" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentRecords.map((record) => (
                <div key={record.title} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{record.title}</p>
                    <p className="text-xs text-muted-foreground">{record.date}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {record.type}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border border-border shadow-sm">
          <CardContent className="p-5">
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Link to="/appointments" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10">
                <CalendarCheck className="w-6 h-6 text-primary" />
                <span className="text-xs font-medium text-foreground">Book Appointment</span>
              </Link>
              <Link to="/consultation" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors border border-accent/10">
                <MessageCircle className="w-6 h-6 text-accent" />
                <span className="text-xs font-medium text-foreground">Start Consultation</span>
              </Link>
              <Link to="/case-history" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-warning/5 hover:bg-warning/10 transition-colors border border-warning/10">
                <FileText className="w-6 h-6 text-warning" />
                <span className="text-xs font-medium text-foreground">View Records</span>
              </Link>
              <Link to="/insurance" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-info/5 hover:bg-info/10 transition-colors border border-info/10">
                <Shield className="w-6 h-6 text-info" />
                <span className="text-xs font-medium text-foreground">Insurance Info</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
