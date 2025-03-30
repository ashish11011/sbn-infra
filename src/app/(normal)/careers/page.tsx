import Link from 'next/link';
import React from 'react';

export const runtime = 'edge';

const Page = () => {
  return (
    <div className=" mt-6 md:mt-10">
      {/* <NavBar /> */}
      <HeroSection />

      {/* <Footer /> */}
    </div>
  );
};

export default Page;

function HeroSection() {
  return (
    <div className="  w-full">
      <div className="max-w-5xl p-4 mx-auto flex flex-col gap-4 md:gap-6 items-center justify-center h-80">
        {/* <p className=" border-b-2 border-primary-blue">About</p> */}
        <p className=" text-3xl md:text-5xl font-semibold text-center">
          Careers
        </p>
        <p className=" text-sm md:text-lg text-gray-700 text-center">
          SBN INFRA is a leading construction company in India, delivering
          large-scale industrial, commercial, and urban projects with
          excellence. With 20+ years of experience, we are trusted for our
          quality and professionalism.
        </p>
      </div>
      <img
        className=" max-w-6xl mx-auto w-full h-96 object-cover"
        src="/about-us-hero.jpg"
        alt=""
      />
      <p className=" max-w-6xl mt-6  text-sm md:text-lg text-gray-700 w-full mx-auto p-4">
        At SBN Infra, we believe in fostering a culture of innovation,
        collaboration, and excellence. As one of India’s leading construction
        companies, we provide exciting career opportunities for individuals who
        are passionate about shaping the future of infrastructure. Whether
        you&apos;re an experienced professional or a fresh talent eager to
        learn, we offer a dynamic work environment where your skills and ideas
        are valued.
      </p>
      <p className=" max-w-6xl mt-6  text-sm md:text-lg text-gray-700 w-full mx-auto p-4">
        We are constantly looking for talented engineers, project managers,
        architects, and professionals who share our commitment to delivering
        high-quality, sustainable, and efficient construction solutions. At SBN
        Infra, you&apos;ll have the opportunity to work on large-scale
        industrial, commercial, and institutional projects, contributing to
        India&apos;s evolving infrastructure landscape.
      </p>
      <p className=" max-w-6xl mt-6  text-sm md:text-lg text-gray-700 w-full mx-auto p-4">
        Join our team and be part of a company that values integrity, teamwork,
        and professional growth. If you&apos;re ready to build a rewarding
        career with us, send your resume to{' '}
        <Link
          href={'mailto:info@sbninfra.in'}
          className=" font-semibold text-blue-600"
        >
          info@sbninfra.in
        </Link>{' '}
        and take the first step toward an exciting future.
      </p>
    </div>
  );
}
