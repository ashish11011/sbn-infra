'use client';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import {
  ArrowRight,
  ArrowUpRight,
  Construction,
  HardHat,
  LucideIcon,
  PencilRuler,
} from 'lucide-react';
import Image from 'next/image';
import { projectsData } from '@/consts/projects';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* play a video in background */}
      <div className=" h-screen overflow-hidden relative w-full flex flex-col justify-between items-center  ">
        <NavBar />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover -z-10"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className=" absolute h-full w-full bg-black opacity-20"></div>
        <HeroSection />
      </div>

      <Projects />
      <Services />
      <AboutUs />

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className=" z-10 my-auto flex flex-col px-4 md:px-8 py-8 h-fit relative w-fit items-center gap-6 md:gap-8 justify-center">
      <div className=" absolute w-full inset-0 bg-primary-blue -z-10 opacity-90"></div>
      <p className=" text-white text-4xl md:text-7xl text-center capitalize font-bold">
        spirit to build beyond boundaries{' '}
      </p>
      <p className=" text-gray-200 md:text-xl font-medium max-w-3xl text-center mx-auto">
        Building excellence with trust and innovation, delivering large-scale
        industrial, commercial, and infrastructure projects across India for
        decades.
      </p>
      <HeroSectionButn />
    </div>
  );
}

function HeroSectionButn() {
  return (
    <Link
      href={'/projects'}
      className=" flex items-center justify-center gap-4 hover:gap-5 group px-8 py-3 hover:scale-105 border mt-6 cursor-pointer duration-200  hover:bg-white hover:text-black text-white text-lg font-semibold"
    >
      <p>View all Projects</p>
      <ArrowUpRight className="" />
    </Link>
  );
}

function Projects() {
  return (
    <div className=" container flex flex-col items-center py-12 space-y-10 justify-center">
      <SectionHeading title="Projects" />
      <div className=" w-full gap-5 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard data={projectsData[0]} />
        <ProjectCard data={projectsData[1]} />
        <ProjectCard data={projectsData[3]} />
      </div>
      <ViewAllProjectBtn />
    </div>
  );
}

function ProjectCard({
  data,
}: {
  data: {
    name: string;
    description: string;
    details: string[];
    image: string;
  };
}) {
  return (
    <div className=" border w-full h-full border-t-0 rounded-xl border-gray-200 shadow-md">
      <div className=" relative w-full h-72">
        <Image
          fill
          className="object-cover rounded-t-xl"
          src={`${data.image}`}
          alt=""
        />
      </div>
      <div className=" p-6 flex flex-col gap-4">
        <p className=" text-2xl font-semibold line-clamp-2">{data.name}</p>
        <ul className=" list-disc pl-4 space-y-0.5">
          {data.details.map((element: string, idx: number) => {
            return <li key={idx}>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

function ViewAllProjectBtn() {
  return (
    <Link
      href={'/projects'}
      className=" hover:underline items-center flex gap-2 hover:gap-3 underline-offset-2 cursor-pointer duration-200 text-black -mt-3 text-lg font-semibold"
    >
      <p>All Projects</p>
      <ArrowRight size={20} />
    </Link>
  );
}

function Services() {
  return (
    <div className=" container w-full flex-col flex gap-6">
      <SectionHeading title="Services" />
      <ServicesCards />
    </div>
  );
}

function ServicesCards() {
  return (
    <div className=" flex flex-col md:flex-row gap-5">
      {servicesData.map(
        (
          element: {
            icon: LucideIcon;
            title: string;
            description: string;
            services: string[];
          },
          index: number
        ) => {
          return <ServiceCard key={index} serviceData={element} />;
        }
      )}
    </div>
  );
}

function ServiceCard({
  serviceData,
}: {
  serviceData: {
    icon: LucideIcon;
    title: string;
    description: string;
    services: string[];
  };
}) {
  return (
    <div className=" flex flex-col gap-2 w-full px-6 py-6 border rounded-xl shadow-md">
      <div className=" border-2 rounded-lg w-fit p-2 border-gray-200">
        <serviceData.icon />
      </div>
      <p className=" mt-4 text-2xl font-semibold">{serviceData.title}</p>
      <p className=" text-gray-700">{serviceData.description}</p>

      <ul className=" mt-4 list-disc pl-4">
        {serviceData.services &&
          serviceData.services.map((element: string, index: number) => {
            return (
              <li className=" text-gray-900" key={index}>
                {element}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

const servicesData = [
  {
    icon: Construction,
    title: 'Turnkey Construction Solutions',
    description:
      'We specialize in the turnkey construction of all types of multi-storied buildings.',
    services: [
      'Residential, Commercial, and Industrial construction',
      'Institutional and Corporate Office development',
      'Group Housing and Hospital building projects',
    ],
  },
  {
    icon: PencilRuler,
    title: 'Design + Build Model',
    description:
      'At SBN, we have integrated warehouse construction into our expertise. Our Design + Build model ensures:',
    services: [
      'Seamless execution from planning to completion',
      'Cost-effective and time-efficient project delivery',
      'A streamlined process for client satisfaction',
    ],
  },
  {
    icon: HardHat,
    title: 'Allied Civil Works',
    description:
      'Our company engages in a wide array of allied civil works, covering diverse civil engineering activities.',
    services: [
      'Earthwork and Foundation construction',
      'Pavement development and Drainage systems',
      'Other critical civil infrastructure components',
    ],
  },
];

function AboutUs() {
  return (
    <div className=" container w-full flex-col flex gap-6">
      <SectionHeading title="About Us" />
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Remove border from this image when done */}
        <div className=" relative border w-full min-h-72">
          <Image src="/image3.jpeg" alt="about" fill />
        </div>
        <div className=" text-gray-800 w-full flex flex-col py-3 gap-6">
          <p className="  md:text-lg">
            SBN INFRA is a leading construction company in India with a strong
            track record of delivering large-scale projects. Over the past nine
            years, we have evolved from M/s SBN CORPORATION into M/s SBN INFRA
            PROJECT PRIVATE LIMITED, driven by excellence and client trust.
          </p>
          <p className="  md:text-lg">
            We specialize in industrial, warehousing, urban, institutional,
            commercial, and interior projects, successfully executing multiple
            developments across India. Our team of skilled engineers, foremen,
            and workers ensures high-quality construction with professionalism
            and adaptability. Trusted nationwide, we continue to set benchmarks
            in the industry.
          </p>
        </div>
      </div>
    </div>
  );
}

const headingVariants = {
  slideIn: {
    initial: { x: -100, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  },
  zoomIn: {
    initial: { scale: 0.5, opacity: 0 },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
};

interface SectionHeadingProps {
  title: string;
  variant?: keyof typeof headingVariants;
}

function SectionHeading({ title, variant = 'slideIn' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={headingVariants[variant].initial}
      whileInView={headingVariants[variant].whileInView}
      viewport={{ once: true }}
      className="relative w-fit mx-auto pb-4"
    >
      <p className="text-5xl font-bold text-neutral-800 text-center">{title}</p>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '6rem' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 h-1 bg-primary-blue"
      />
    </motion.div>
  );
}
