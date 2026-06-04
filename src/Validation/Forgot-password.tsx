import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email is too long"),
});

export type ForgotPasswordFormData = z.infer<typeof ForgotPasswordSchema>;
