import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { geminiResponse, mockInterviewId } = await req.json();
        const response = await prisma.feedback.create({
            data: {
                feedback: geminiResponse,
                mockInterviewId: mockInterviewId,
            },
        });

        return NextResponse.json({ message: "saved" });
    } catch (error) {
        console.log(error)
        return NextResponse.json("error occurred")
    }

}