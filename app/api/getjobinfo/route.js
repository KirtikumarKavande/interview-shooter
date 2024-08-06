import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const{email}=await req.json()
        const response = await prisma.mockInterview.findMany({
            where: {
                createdBy:email
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