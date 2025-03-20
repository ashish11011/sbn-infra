import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type NavElement = {
  label: string;
  path: string;
};

const navElements: NavElement[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

const NavBar = () => {
  return (
    <div className="w-full relative bg-transparent z-50 bg-white">
      <div className="absolute w-full h-full rounded-md bg-white opacity-30"></div>

      <div className="flex items-center justify-between gap-6 w-full py-4 px-10">
        <div className="relative h-8 w-auto min-w-44">
          <Image src="/logo.png" layout="fill" alt="logo" />
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navElements.map((element, index) => (
            <Link
              key={index}
              href={element.path}
              className="text-black text-lg font-semibold cursor-pointer px-4 py-2 rounded-md"
            >
              {element.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
