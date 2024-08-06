import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const response = await prisma.mockInterview.findMany({
      where: {
        createdBy: email
      },
      include: {
        feedbacks: true
      }
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in getjobinfo API:", error);
    return NextResponse.json({ error: "An error occurred while fetching interview data" }, { status: 500 });
  }
}