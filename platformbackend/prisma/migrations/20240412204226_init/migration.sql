-- CreateEnum
CREATE TYPE "accounttype" AS ENUM ('recruter', 'applicant');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accounttype" "accounttype" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "Employer" TEXT,
    "Job_title" TEXT,
    "Company_location" TEXT,
    "Wages" TEXT,
    "Experience" TEXT,
    "description" TEXT,
    "Job_Location" TEXT,
    "Company_description" TEXT,
    "role_Responsibilities" TEXT,
    "role_Requirements" TEXT,
    "Start_date" TEXT,
    "Posting_date" TEXT,
    "recruter" INTEGER NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenumber" TEXT NOT NULL,
    "apllicant" INTEGER NOT NULL,
    "offer" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "Application_offer_apllicant_key" ON "Application"("offer", "apllicant");

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_recruter_fkey" FOREIGN KEY ("recruter") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_apllicant_fkey" FOREIGN KEY ("apllicant") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_offer_fkey" FOREIGN KEY ("offer") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
