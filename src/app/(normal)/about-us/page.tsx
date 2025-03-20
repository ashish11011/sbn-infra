import Footer from '@/components/footer';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <HeroSection />
      <SecondSection />
      <OurValue />
      <Footer />
    </div>
  );
};

export default Page;

function HeroSection() {
  return (
    <div className="  w-full">
      <div className="max-w-5xl p-4 mx-auto flex flex-col gap-4 md:gap-6 items-center justify-center h-96">
        <p className=" border-b-2 border-primary-blue">About</p>
        <p className=" text-3xl md:text-5xl font-semibold text-center">
          About The Company
        </p>
        <p className=" text-sm md:text-base text-center">
          SBN INFRA is a leading construction company in India, delivering
          large-scale industrial, commercial, and urban projects with
          excellence. With 20+ years of experience, we are trusted for our
          quality and professionalism.
        </p>
      </div>
      <img
        className=" w-full h-96 object-cover"
        src="/about-us-hero.jpg"
        alt=""
      />
    </div>
  );
}

const aboutUsData = [
  {
    dataNumber: '13+',
    title: ' Contracting Years',
    subTitle: 'Delivering excellence in construction with proven expertise.',
  },
  {
    dataNumber: '160+',
    title: 'Active Team Members',
    subTitle: 'A skilled workforce ensuring quality and efficiency.',
  },
  {
    dataNumber: '30%',
    title: 'Annual Team Growth',
    subTitle: 'Expanding expertise and scaling operations every year.',
  },
  {
    dataNumber: '5+',
    title: 'States Across India',
    subTitle: 'Strengthening our presence with quality infrastructure.',
  },
];

function SecondSection() {
  return (
    <div className=" mt-12 max-w-7xl w-full mx-auto p-4 flex flex-col gap-6 md:flex-row">
      <div className=" w-full md:w-[62%] my-auto">
        <div className=" w-full grid grid-cols-2 gap-4">
          {aboutUsData.map(({ dataNumber, title, subTitle }) => {
            return (
              <div
                key={title}
                className=" bg-gray-100 rounded-2xl p-4 md:p-6  w-full flex flex-col gap-2"
              >
                <p className=" text-3xl md:text-5xl font-semibold">
                  {dataNumber}
                </p>
                <p className=" text-2xl mt-3 md:mt-4 font-semibold">{title}</p>
                <p>{subTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" hidden md:block w-full md:w-[38%]">
        <img src="/about-2.jpg" className=" rounded-2xl" alt="" />
      </div>
    </div>
  );
}

function OurValue() {
  return (
    <div className=" w-full max-w-7xl p-4 mt-12 mx-auto flex flex-col gap-8 md:gap-16">
      <div className=" w-full flex flex-col md:flex-row gap-4">
        <div className=" flex flex-col gap-4 max-w-lg">
          <p className=" text-primary-blue text-xl">[About]</p>
          <p className=" text-primary-blue text-3xl md:text-5xl font-semibold">
            Driven by Passion, Grounded in Quality.
          </p>
        </div>
        <Link href={'/contact-us'} className=" w-fit md:self-end md:ml-auto">
          <p className=" rounded-3xl px-6 py-3 text-xl cursor-pointer hover:bg-primary-blue/90 duration-200 text-white bg-primary-blue font-semibold">
            Contact Us
          </p>
        </Link>
      </div>
      <div className=" bg-gray-100 w-full flex flex-col md:flex-row md:gap-12 rounded-3xl p-6">
        <img
          src="/aboutus-value.jpg"
          className=" w-full md:w-[50%] h-auto rounded-xl"
          alt=""
        />
        <div className=" w-full pt-8 md:py-12 flex flex-col gap-4 justify-between">
          <p className=" font-semibold text-3xl">Our Values</p>
          <p className=" text-xl text-primary-blue/90">
            Our values define who we are and guide every project we undertake.
            Committed to quality, integrity, innovation, and sustainability, we
            strive to exceed client expectations while building trust and
            fostering collaboration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Quality & Excellence',
              'Creative Innovation',
              'Sustainable Practices',
              'Safety Commitment',
            ].map((element, index) => {
              return (
                <div
                  key={index}
                  className=" px-4 py-3 text-center font-semibold bg-white border-2 rounded-xl "
                >
                  <p>{element}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 w-full flex flex-col md:flex-row md:gap-12 rounded-3xl p-6">
        <img
          src="/about-vision.jpg"
          className=" w-full md:w-[50%] h-auto rounded-xl"
          alt=""
        />
        <div className=" w-full pt-8 md:py-12 flex flex-col gap-4 justify-between">
          <p className=" font-semibold text-3xl">Our Mission</p>
          <p className=" text-xl text-primary-blue/90">
            Our mission is to build high-quality, innovative, and sustainable
            infrastructure that exceeds client expectations. We are committed to
            delivering excellence through craftsmanship, prioritizing customer
            satisfaction, and fostering strong partnerships.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Empowered Leadership',
              'Efficiency & Speed',
              'Innovative Approach',
              'Client Satisfaction',
            ].map((element, index) => {
              return (
                <div
                  key={index}
                  className=" px-4 py-3 text-center font-semibold bg-white border-2 rounded-xl "
                >
                  <p>{element}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
