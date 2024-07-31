/*
  Warnings:

  - You are about to drop the `mockInterview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mockInterview";

-- CreateTable
CREATE TABLE "MockInterview" (
    "id" SERIAL NOT NULL,
    "jsonMockQuestion" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "jobDesc" TEXT NOT NULL,
    "jobExperience" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mockId" TEXT NOT NULL,

    CONSTRAINT "MockInterview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "feedback" TEXT NOT NULL,
    "mockInterviewId" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MockInterview_mockId_key" ON "MockInterview"("mockId");

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_mockInterviewId_fkey" FOREIGN KEY ("mockInterviewId") REFERENCES "MockInterview"("mockId") ON DELETE RESTRICT ON UPDATE CASCADE;
