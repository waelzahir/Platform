-- CreateTable
CREATE TABLE "Offer" (
    "id" SERIAL NOT NULL,
    "recruter" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "Company" TEXT NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "Company" TEXT NOT NULL,
    "applicant" INTEGER NOT NULL,
    "offer" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_applicant_offer_key" ON "Application"("applicant", "offer");

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_recruter_fkey" FOREIGN KEY ("recruter") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_offer_fkey" FOREIGN KEY ("offer") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_applicant_fkey" FOREIGN KEY ("applicant") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
