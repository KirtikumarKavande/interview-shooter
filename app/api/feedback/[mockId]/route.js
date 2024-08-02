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
        console.log("good day",response)

        return NextResponse.json({response });
    } catch (error) {
        console.log(error)
        return NextResponse.json("error occurred")
    }

}