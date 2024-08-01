/*
  Warnings:

  - Changed the type of `question` on the `feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "feedback" DROP COLUMN "question",
ADD COLUMN     "question" INTEGER NOT NULL;
