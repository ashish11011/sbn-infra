import Link from 'next/link';
import React from 'react';

type NavElement = {
  label: string;
  path: string;
};

const navElements: NavElement[] = [
  { label: 'Home', path: '/admin/' },
  { label: 'Careers', path: '/admin/careers' },
  { label: 'Projects', path: '/admin/projects' },
];

const AdminNavBar = () => {
  return (
    <div className="w-full border-b-2 px-8 py-3 flex justify-between items-center gap-4 bg-transparent z-50">
      <div className="relative h-10 w-auto min-w-44">
        {/* <Image src='/logo.png' layout='fill' alt='logo' /> */}
        <p className="text-3xl font-medium">Admin</p>
      </div>

      <div className="hidden md:flex items-center gap-1">
        {navElements.map((element, index) => (
          <Link
            key={index}
            href={element.path}
            className="text-primary-gray font-medium hover:text-primary-blue px-4 py-2 rounded-md hover:bg-gray-100"
          >
            {element.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminNavBar;
