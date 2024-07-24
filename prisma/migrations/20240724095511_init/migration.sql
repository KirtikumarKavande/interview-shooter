/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "mockInterview" (
    "id" SERIAL NOT NULL,
    "jsonMockResp" TEXT NOT NULL,
    "jobPostion" TEXT NOT NULL,
    "jobDesc" TEXT NOT NULL,
    "jobExprience" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mockId" TEXT NOT NULL,

    CONSTRAINT "mockInterview_pkey" PRIMARY KEY ("id")
);
