CREATE TYPE "accounttype" AS ENUM ('recruter', 'applicant');

CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accounttype" "accounttype" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenumber" TEXT NOT NULL,
    "applicant" INTEGER NOT NULL,
    "offer" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_Username_key" ON "User"("Username");

CREATE UNIQUE INDEX "Application_offer_applicant_key" ON "Application"("offer", "applicant");

ALTER TABLE "Offer" ADD CONSTRAINT "Offer_recruter_fkey" FOREIGN KEY ("recruter") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Application" ADD CONSTRAINT "Application_applicant_fkey" FOREIGN KEY ("applicant") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Application" ADD CONSTRAINT "Application_offer_fkey" FOREIGN KEY ("offer") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
