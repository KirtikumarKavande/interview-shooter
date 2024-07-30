/*
  Warnings:

  - You are about to drop the column `jsonMockResp` on the `mockInterview` table. All the data in the column will be lost.
  - Added the required column `jsonMockQuestion` to the `mockInterview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mockInterview" DROP COLUMN "jsonMockResp",
ADD COLUMN     "jsonMockQuestion" TEXT NOT NULL;
