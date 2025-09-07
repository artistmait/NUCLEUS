//creating form schema for login and signup forms using zod
import { z } from "zod";
export const RegisterFormSchema = z.object({
    moodleid : z.string().min(8, "Moodle ID is required"),
    password : z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword : z.string().min(8, "Confirm Password must be at least 8 characters long")
})

export const LoginFormSchema = z.object({
    moodleid : z.string().min(8, "Moodle ID is required"),
    password : z.string().min(8, "Password must be at least 8 characters long")
})