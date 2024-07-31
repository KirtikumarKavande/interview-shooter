/*
  Warnings:

  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MockInterview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_mockInterviewId_fkey";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "MockInterview";

-- CreateTable
CREATE TABLE "mockInterview" (
    "id" SERIAL NOT NULL,
    "jsonMockQuestion" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "jobDesc" TEXT NOT NULL,
    "jobExperience" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "mockId" TEXT NOT NULL,

    CONSTRAINT "mockInterview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" SERIAL NOT NULL,
    "feedback" TEXT NOT NULL,
    "mockInterviewId" TEXT NOT NULL,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mockInterview_mockId_key" ON "mockInterview"("mockId");

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_mockInterviewId_fkey" FOREIGN KEY ("mockInterviewId") REFERENCES "mockInterview"("mockId") ON DELETE RESTRICT ON UPDATE CASCADE;
