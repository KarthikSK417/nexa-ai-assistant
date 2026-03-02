import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, Clock, AlertCircle, CreditCard, FileText } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Insurance = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Insurance</h1>
          <p className="text-muted-foreground mt-1">Your insurance coverage and claims</p>
        </div>

        {/* Insurance Card */}
        <Card className="border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm opacity-80">Insurance Provider</p>
                <p className="text-xl font-display font-bold mt-1">HealthGuard Premium</p>
              </div>
              <Shield className="w-10 h-10 opacity-80" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs opacity-70">Policy No.</p>
                <p className="text-sm font-medium mt-0.5">HG-2026-78432</p>
              </div>
              <div>
                <p className="text-xs opacity-70">Valid Until</p>
                <p className="text-sm font-medium mt-0.5">Dec 31, 2026</p>
              </div>
              <div>
                <p className="text-xs opacity-70">Plan Type</p>
                <p className="text-sm font-medium mt-0.5">Family Floater</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Coverage */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-display">Coverage Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Annual Limit Used</span>
                  <span className="font-medium text-foreground">$12,500 / $50,000</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Hospitalization', covered: true },
                  { label: 'Outpatient', covered: true },
                  { label: 'Dental', covered: true },
                  { label: 'Vision', covered: false },
                  { label: 'Mental Health', covered: true },
                  { label: 'Maternity', covered: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                    {item.covered ? (
                      <CheckCircle className="w-4 h-4 text-accent" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span className={`text-sm ${item.covered ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Claims */}
          <Card className="border border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-display">Recent Claims</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: 'Cardiology Consultation', amount: '$350', date: 'Feb 28, 2026', status: 'Approved', icon: CheckCircle, statusColor: 'text-accent' },
                { title: 'Lab Tests - Blood Work', amount: '$180', date: 'Feb 15, 2026', status: 'Processing', icon: Clock, statusColor: 'text-warning' },
                { title: 'Annual Health Checkup', amount: '$500', date: 'Jan 20, 2026', status: 'Approved', icon: CheckCircle, statusColor: 'text-accent' },
                { title: 'Prescription Medicines', amount: '$95', date: 'Jan 5, 2026', status: 'Approved', icon: CheckCircle, statusColor: 'text-accent' },
              ].map((claim) => (
                <div key={claim.title} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{claim.title}</p>
                      <p className="text-xs text-muted-foreground">{claim.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{claim.amount}</p>
                    <p className={`text-xs flex items-center gap-1 justify-end ${claim.statusColor}`}>
                      <claim.icon className="w-3 h-3" /> {claim.status}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Insurance;
