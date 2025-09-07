// src/app/page.tsx
import { ExaminationSection } from '@/components/ExamSection/ExaminationSection';

export default function Home() {
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center">
      <ExaminationSection />
    </main>
  );
}