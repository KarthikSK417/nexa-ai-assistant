import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Clock, MapPin, Star, Plus } from 'lucide-react';

const doctors = [
  { name: 'Dr. Sarah Wilson', specialty: 'Cardiologist', rating: 4.9, available: '10:00 AM - 4:00 PM', location: 'City Heart Center', avatar: 'SW' },
  { name: 'Dr. James Chen', specialty: 'Dermatologist', rating: 4.8, available: '9:00 AM - 1:00 PM', location: 'SkinCare Clinic', avatar: 'JC' },
  { name: 'Dr. Emily Brown', specialty: 'General Physician', rating: 4.7, available: '8:00 AM - 6:00 PM', location: 'MedCare Hospital', avatar: 'EB' },
  { name: 'Dr. Michael Lee', specialty: 'Orthopedic', rating: 4.9, available: '11:00 AM - 5:00 PM', location: 'Bone & Joint Clinic', avatar: 'ML' },
  { name: 'Dr. Priya Sharma', specialty: 'Neurologist', rating: 4.6, available: '10:00 AM - 3:00 PM', location: 'NeuroHealth Center', avatar: 'PS' },
  { name: 'Dr. Robert Taylor', specialty: 'ENT Specialist', rating: 4.8, available: '9:00 AM - 2:00 PM', location: 'ENT Care Hospital', avatar: 'RT' },
];

const myAppointments = [
  { doctor: 'Dr. Sarah Wilson', specialty: 'Cardiologist', date: 'Mar 5, 2026', time: '10:00 AM', status: 'Confirmed' },
  { doctor: 'Dr. James Chen', specialty: 'Dermatologist', date: 'Mar 8, 2026', time: '2:30 PM', status: 'Pending' },
  { doctor: 'Dr. Emily Brown', specialty: 'General Physician', date: 'Mar 12, 2026', time: '11:00 AM', status: 'Confirmed' },
];

const Appointments = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Appointments</h1>
            <p className="text-muted-foreground mt-1">Book and manage your doctor appointments</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> Book Appointment
          </Button>
        </div>

        {/* My Appointments */}
        <Card className="border border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-display">My Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {myAppointments.map((apt) => (
                <div key={`${apt.doctor}-${apt.date}`} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CalendarCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{apt.doctor}</p>
                      <p className="text-xs text-muted-foreground">{apt.specialty}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-4">
                    <div>
                      <p className="text-sm text-foreground">{apt.date}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                        <Clock className="w-3 h-3" /> {apt.time}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      apt.status === 'Confirmed' ? 'bg-accent/10 text-accent' : 'bg-warning/10 text-warning'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Doctors */}
        <div>
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Available Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doc) => (
              <Card key={doc.name} className="border border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{doc.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.specialty}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-warning fill-warning" />
                        <span className="text-xs text-foreground font-medium">{doc.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 mb-4">
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {doc.available}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" /> {doc.location}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Appointments;
