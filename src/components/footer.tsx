import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className=" mt-12 relative min-h-96 h-full w-full md:px-12">
      <img
        src="/footer.jpg"
        className=" absolute top-0 left-0 w-full h-full object-cover"
        alt="footer"
      />

      {/* content of footer */}
      <div className="relative z-[999] max-w-7xl mx-auto px-8 pt-16 pb-4 text-white flex h-full min-h-96 flex-col justify-between gap-6">
        <div className=" flex gap-6 flex-col md:flex-row">
          <div className=" flex flex-col gap-1 w-full max-w-96 text-sm font-medium">
            <p className=" text-3xl font-semibold">SBN INFRA PRIVATE LIMITED</p>
            <p className=" mt-6">PLOT NO.-113,SECTOR -2</p>
            <p>
              PHASE-1,H.S.I.I.D.C.I.M.T, BAWAL, REWARI, HARYANA 123501, INDIA.
            </p>
            <p className=" mt-4">Phone: +91-9319912243</p>
            <p>Email: info@nacdacinfrastructure.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" text-xl font-semibold">Usefull Links</p>
            {navLinks.map(({ name, slug }) => {
              return (
                <Link
                  key={name}
                  className=" w-fit hover:text-white hover:underline text-gray-300"
                  href={slug}
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className=" ml-auto w-full md:max-w-96">
            <p className=" font-medium text-xl">Contact Us</p>
            <input
              type="text"
              placeholder="Name"
              className=" px-3 py-2 mt-3 w-full bg-transparent border border-gray-500 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className=" px-3 py-2 mt-3 w-full bg-transparent border border-gray-500 rounded-md"
            />
            <input
              type="text"
              placeholder="Message"
              className=" px-3 py-2 mt-3 w-full bg-transparent border border-gray-500 rounded-md"
            />
            <button className=" px-3 py-2 mt-3 w-full bg-primary-blue text-white rounded-md">
              Submit
            </button>
          </div>
        </div>
        <div className=" mt-auto border-t text-white border-gray-500">
          <p className=" mx-auto mt-3 text-xs md:text-sm text-center max-w-2xl">
            Lorem ipsum ur adipisicing elit. Ad facere impedit magni qui ex,
            consequatur aliquam hic at in voluptas. Excepturi mollitia sapiente
            asperiores similique quae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const navLinks = [
  { name: 'Home', slug: '/' },
  { name: 'Services', slug: '/services' },
  { name: 'Projects', slug: '/projects' },
  { name: 'About Us', slug: '/about-us' },
];
