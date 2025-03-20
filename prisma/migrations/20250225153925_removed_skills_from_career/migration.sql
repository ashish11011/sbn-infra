/*
  Warnings:

  - You are about to drop the `career` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "career";

-- CreateTable
CREATE TABLE "Career" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year_of_experience" INTEGER,
    "job_description" TEXT NOT NULL,
    "responsibility" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "date_posted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);
