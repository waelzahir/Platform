/*
  Warnings:

  - You are about to drop the column `Company` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `applicant` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Application` table. All the data in the column will be lost.
  - Added the required column `email` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phonenumber` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_applicant_fkey";

-- DropIndex
DROP INDEX "Application_applicant_offer_key";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "Company",
DROP COLUMN "applicant",
DROP COLUMN "title",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phonenumber" TEXT NOT NULL;
