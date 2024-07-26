/*
  Warnings:

  - You are about to drop the column `jobExprience` on the `mockInterview` table. All the data in the column will be lost.
  - You are about to drop the column `jobPostion` on the `mockInterview` table. All the data in the column will be lost.
  - Added the required column `jobExperience` to the `mockInterview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobPosition` to the `mockInterview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mockInterview" DROP COLUMN "jobExprience",
DROP COLUMN "jobPostion",
ADD COLUMN     "jobExperience" TEXT NOT NULL,
ADD COLUMN     "jobPosition" TEXT NOT NULL;
