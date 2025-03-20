import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { NewCareerSchemaType } from "@/consts/types/zod";

const client = new PrismaClient();

export async function POST(request: NextRequest){
    const data = await request.json();
    const { title, yearOfExperience, description, responsibility, industry } = data as NewCareerSchemaType;
    const date_posted = new Date().toISOString();
    const newCareer = await client.career.create({
        data: {
            title: title,
            year_of_experience: Number(yearOfExperience),
            job_description: description,
            responsibility: responsibility,
            industry: industry,
            date_posted: date_posted
        }
    });
    return new NextResponse(JSON.stringify(newCareer));
}