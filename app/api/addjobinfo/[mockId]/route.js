import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const response = await prisma.mockInterview.findFirst({
      where: { mockId: params.mockId },
    });
console.log("correct response",response)
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "something went wrong" });
  }
}
