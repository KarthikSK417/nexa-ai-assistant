import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const records = [
  { id: 1, title: 'Blood Test Report', doctor: 'Dr. Sarah Wilson', date: 'Feb 28, 2026', type: 'Lab Report', diagnosis: 'Normal range - all parameters within limits', status: 'Completed' },
  { id: 2, title: 'Annual Health Checkup', doctor: 'Dr. Emily Brown', date: 'Feb 15, 2026', type: 'Consultation', diagnosis: 'Good overall health. Vitamin D slightly low.', status: 'Completed' },
  { id: 3, title: 'Chest X-Ray', doctor: 'Dr. Michael Lee', date: 'Jan 20, 2026', type: 'Imaging', diagnosis: 'No abnormalities detected', status: 'Completed' },
  { id: 4, title: 'ECG Report', doctor: 'Dr. Sarah Wilson', date: 'Jan 10, 2026', type: 'Cardiology', diagnosis: 'Normal sinus rhythm', status: 'Completed' },
  { id: 5, title: 'Skin Allergy Test', doctor: 'Dr. James Chen', date: 'Dec 5, 2025', type: 'Dermatology', diagnosis: 'Mild allergic reaction to dust mites', status: 'Completed' },
  { id: 6, title: 'MRI - Knee', doctor: 'Dr. Michael Lee', date: 'Nov 18, 2025', type: 'Imaging', diagnosis: 'Minor meniscus tear - physiotherapy recommended', status: 'Completed' },
];

const CaseHistory = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Case History</h1>
          <p className="text-muted-foreground mt-1">Your complete medical records and history</p>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border border-border shadow-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">{records.length}</p>
                <p className="text-xs text-muted-foreground">Total Records</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border shadow-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">This Year</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border shadow-sm">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">4</p>
                <p className="text-xs text-muted-foreground">Doctors Visited</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Records list */}
        <Card className="border border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-display">Medical Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {records.map((record) => (
                <div key={record.id} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{record.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{record.doctor} • {record.date}</p>
                        <p className="text-sm text-muted-foreground mt-2">{record.diagnosis}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {record.type}
                      </span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default CaseHistory;
