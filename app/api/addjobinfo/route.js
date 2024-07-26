import { NextResponse } from "next/server";
export async function POST(req, res) {
  const {
    jobPosition,
    jobDescription,
    yearOfExperience,
    jsonMockResp,
    mockId,
    createdBy,
  } = await req.json();

  try {
    const response = await prisma.mockInterview.create({
      data: {
        jobPosition: jobPosition,
        jobDesc: jobDescription,
        jobExperience: yearOfExperience,
        jsonMockResp: jsonMockResp,
        mockId: mockId,
        createdBy: createdBy,
      },
    });
    NextResponse.json(response.mockId);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ message: "Hello from Next.js!" });
}
