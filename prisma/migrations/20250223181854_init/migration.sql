-- CreateTable
CREATE TABLE "career" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year_of_experience" INTEGER,
    "job_description" TEXT NOT NULL,
    "responsibility" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "date_posted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "career_pkey" PRIMARY KEY ("id")
);
