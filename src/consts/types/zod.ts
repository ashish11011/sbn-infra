import { z } from "zod";

export const newCareerSchema = z.object({
    title: z.string(),
    yearOfExperience: z.string(),
    responsibility: z.string(),
    industry: z.string(),
    description: z.string(),
    datePosted: z.string().optional(),
});

export type NewCareerSchemaType = z.infer<typeof newCareerSchema>;
