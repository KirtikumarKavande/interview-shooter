import prisma from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const {
    jobPosition,
    jobDescription,
    yearOfExperience,
    jsonMockQuestion,
    mockId,
    createdBy,
  } = await req.json();

  try {
    const response = await prisma.mockInterview.create({
      data: {
        jobPosition: jobPosition,
        jobDesc: jobDescription,
        jobExperience: yearOfExperience,
        jsonMockQuestion: jsonMockQuestion,
        mockId: mockId,
        createdBy: createdBy,
      },
    });
   return  NextResponse.json({mockId:response.mockId});
  } catch (error) {
    console.log(error);
   return NextResponse.json({ error: "something went wrong" });
  }
}


