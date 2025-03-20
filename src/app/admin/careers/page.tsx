import { CreateNewCareerDialog } from '@/components/admin/careers/addNewCareerDialog';
import CareerTable from '@/components/admin/careers/table';
import React from 'react';
import { PrismaClient, Career } from '@prisma/client';

const Page = async () => {
  const Client = new PrismaClient();
  const careerData: Career[] = await Client.career.findMany();

  return (
    <div className=" max-w-7xl mx-auto w-full">
      <div className=" my-12 w-full">
        <CareerTable careerData={careerData} />
      </div>
      <CreateNewCareerDialog />
    </div>
  );
};

export default Page;
