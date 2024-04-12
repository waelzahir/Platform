/*
  Warnings:

  - Added the required column `apllicant` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "apllicant" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_apllicant_fkey" FOREIGN KEY ("apllicant") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
