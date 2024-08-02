import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
    try {
        const {mockId} = await params
        const response = await prisma.mockInterview.findMany({
            where: {
                mockId
            },
            include: {
                feedbacks: true
              }
        });

        return NextResponse.json(response);
    } catch (error) {
        console.log(error)
        return NextResponse.json("error occurred")
    }

}