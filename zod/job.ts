import { z } from "zod";

export const newJobSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters long.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters long.",
  }),
  companyName: z.string().min(5, {
    message: "Company Name must be at least 5 characters long.",
  }),
  salary: z.string().min(5, {
    message: "Salary must be at least 5 characters long.",
  }),
  currency: z.string({
    required_error: "Please select one category",
  }),
  location: z.string({
    required_error: "Please select one location type",
  }),

});

export const UpdateJobSchema = z.object({
  title: z.string().min(5, {
    message: "Title must contain at least 5 characters long.",
  }),
  id: z.string(),
  description: z.string().min(20, {
    message: "Description must contain at least 20 characters long.",
  }),
  companyName: z.string().min(5, {
    message: "Company Name must contain at least 5 characters long.",
  }),
  salary: z.string().min(5, {
    message: "Salary must contain at least 5 characters long.",
  }),
  currency: z.string({
    required_error: "Please select one category",
  }),
  location: z.string({
    required_error: "Please select one location type",
  }),
});

export type NewJob = z.infer<typeof newJobSchema>;
export type UpdateJob = z.infer<typeof UpdateJobSchema>;
