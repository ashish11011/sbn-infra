'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Career } from '@prisma/client';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const CareerTable = ({ careerData }: { careerData: Career[] }) => {
  const router = useRouter();
  async function handleDelete(id: string | number) {
    const response = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (response) {
      // await axios.delete(`/api/careers?id=${id}`);
      await axios.delete(`/api/career?id=${id}`);
      router.refresh();
    }
  }

  function changeDataFormat(data: Date) {
    const date = new Date(data).toDateString();
    return date;
  }
  return (
    <div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead className="w-[252px]">Year of Experience</TableHead>
            <TableHead>Job Description</TableHead>
            <TableHead className=" w-[252px]">Date Posted</TableHead>
            <TableHead className=" w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {careerData?.map((item: Career) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.year_of_experience}</TableCell>
                <TableCell>{item.job_description}</TableCell>
                <TableCell className="">
                  {changeDataFormat(item.date_posted)}
                </TableCell>
                <TableCell className=" flex items-center gap-4">
                  <Trash2
                    onClick={() => handleDelete(item.id)}
                    className=" text-gray-700 size-5 cursor-pointer"
                  />
                  <Pencil className=" text-gray-700 size-5 cursor-pointer" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CareerTable;
