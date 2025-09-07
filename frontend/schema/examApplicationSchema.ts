import { z } from "zod";

export const ExamApplicationSchema = z.object({
  studentName: z.string().min(1, "Student Name is required"),
  studentId: z.string().min(1, "Student ID is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  semester: z.string().min(1, "Semester/Year is required"),
  department: z.string().min(1, "Department is required"),
  reason: z.string().min(10, "Reason is required"),
  documents: z
    .instanceof(File, { message: "Please upload a document" }), // now required
});

export type ExamApplicationType = z.infer<typeof ExamApplicationSchema>;
