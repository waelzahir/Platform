/*
  Warnings:

  - A unique constraint covering the columns `[offer,apllicant]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Application_offer_apllicant_key" ON "Application"("offer", "apllicant");
