// src/components/ExaminationSection.tsx

import { Award, FileCheck2, FileText, GraduationCap, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Define a type for our service card props for better type safety
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Data for the service cards - makes the component cleaner and easier to update
const services: Service[] = [
  {
    icon: FileText,
    title: 'Marksheet Request',
    description: 'Request your official academic marksheet',
  },
  {
    icon: GraduationCap,
    title: 'Official Transcript',
    description: 'Request official transcript for external use',
  },
  {
    icon: Award,
    title: 'Degree Certificate',
    description: 'Request your degree completion certificate',
  },
  {
    icon: FileCheck2,
    title: 'Revaluation Request',
    description: 'Apply for examination paper revaluation',
  },
];

export function ExaminationSection() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      {/* --- Page Header --- */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-card-foreground mb-2">
          Examination Section
        </h1>
        <p className="text-muted-foreground text-lg">
          Submit requests for academic documents, certificates, and examination-related services.
        </p>
      </header>

      {/* --- Important Information Section --- */}
      <section className="border-2 border-primary/50 bg-primary/5 rounded-xl p-6 mb-12">
        <h3 className="text-lg font-bold text-card-foreground mb-4">Important Information</h3>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h4 className="font-semibold mb-2">Processing Time:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Marksheet requests: 3-5 days</li>
              <li>Official Transcripts: 5-7 days</li>
              <li>Degree Certificates: 7-10 days</li>
              <li>Revaluation Application: 10-12 days</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Required Documents:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Valid student ID or admission number</li>
              <li>Fee Payment receipt (where applicable)</li>
              <li>Passport size photograph</li>
              <li>Additional documents as per service requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Services Provided Section --- */}
      <section>
        <h2 className="text-3xl font-bold text-card-foreground mb-8">Services Provided</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center">
              <CardHeader>
                <div className="bg-muted p-4 rounded-lg w-fit mx-auto">
                  <service.icon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="w-full">
                <Button variant="secondary" className="w-full">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}