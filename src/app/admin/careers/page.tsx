import { CreateNewCareerDialog } from '@/components/admin/careers/addNewCareerDialog'
import CareerTable from '@/components/admin/careers/table'
import React from 'react'
import { PrismaClient }  from '@prisma/client'
import { NewCareerSchemaType } from '@/consts/types/zod'

const Page = async () => {
  const Client = new PrismaClient();
  const careerData = await Client.career.findMany();

  console.log(careerData)
  return (
    <div className=' max-w-7xl mx-auto w-full' >
      <div className=' my-12 w-full' >
        <CareerTable careerData={careerData} />
      </div>
        <CreateNewCareerDialog />

    </div>
  )
}

export default Page