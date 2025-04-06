'use client';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import {
  ArrowRight,
  Construction,
  HardHat,
  LucideIcon,
  PencilRuler,
} from 'lucide-react';
import Image from 'next/image';
import { projectsData } from '@/consts/projects';
import { motion } from 'motion/react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export const runtime = 'edge';

export default function Home() {
  return (
    <div className="">
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
          <source src="/heroBGs.mp4" type="video/mp4" />
        </video>
        <div className=" absolute h-full w-full bg-black opacity-50"></div>
        <HeroSection />
      </div>

      <AboutUs2 />
      <Services />
      <WhyChooseUs />
      <Projects />
      <LogoMarquee />
      <ContactUs />

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className=" z-10 my-auto flex flex-col px-4 md:px-10 py-8 h-fit relative rounded-lg overflow-hidden w-fit items-center gap-6 md:gap-8 justify-center">
      <div className=" absolute w-full inset-0 bg-neutral-600 -z-10 opacity-100"></div>
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
      className=" flex items-center justify-center gap-4 group px-8 py-3 hover:scale-105 border mt-6 cursor-pointer duration-200  hover:bg-white hover:text-black text-white text-lg font-semibold"
    >
      <p>View all Projects</p>
      <ArrowRight className=" group-hover:-rotate-45 duration-200" />
    </Link>
  );
}

function Projects() {
  return (
    <div className=" max-w-7xl w-full mx-auto py-8 md:py-16 px-4 md:px-6 flex flex-col items-center gap-12 justify-center">
      <SectionHeading title="Projects" />
      <div className=" w-full gap-6 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      <div className=" relative w-full h-56">
        <Image
          fill
          className="object-cover rounded-t-xl"
          src={`${data.image}`}
          alt=""
        />
      </div>
      <div className=" p-6 flex flex-col gap-4 min-h-60">
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
      className=" flex items-center justify-center gap-4 group px-8 py-3 hover:scale-105 border md:mt-4 cursor-pointer duration-200 text-black hover:border-primary-blue text-lg font-semibold"
    >
      <p>All Projects</p>
      <ArrowRight className=" group-hover:-rotate-45 duration-200" />
    </Link>
  );
}

function Services() {
  return (
    <div className=" max-w-7xl w-full mx-auto py-8 md:py-16 px-4 md:px-6 flex flex-col items-center gap-12 justify-center">
      <SectionHeading title="Services" />
      <ServicesCards />
    </div>
  );
}

function ServicesCards() {
  return (
    <div className=" flex flex-col md:flex-row gap-6">
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

      <ul className=" mt-4 list-disc pl-4 pb-4">
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
      className="relative w-fit mx-auto pb-2.5"
    >
      <p className=" text-4xl md:text-5xl font-bold text-neutral-800 text-center">
        {title}
      </p>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 h-1 bg-primary-blue"
      />
    </motion.div>
  );
}

function AboutUs2() {
  return (
    <div className=" w-full max-w-7xl mx-auto  flex flex-col gap-12 px-4 md:px-6 py-8 md:py-16 md:flex-row">
      <div className=" w-full flex flex-col justify-between gap-6">
        <div className=" space-y-2">
          <p className=" text-gray-700">[About Us]</p>
          <p className=" text-3xl md:text-5xl ">
            leading the way in exceptional construction
          </p>
        </div>
        <p className=" text-gray-600 text-sm md:text-lg">
          SBN INFRA is a premier construction company in India, specializing in
          large-scale industrial, commercial, and urban projects. With over 20
          years of experience, we are known for our commitment to quality,
          professionalism, and excellence.
        </p>
        <img src="./about-us-SMALL.jpg" className=" rounded-lg" alt="" />
        <p className="text-sm text-gray-700">
          Our core values—quality, integrity, innovation, and
          sustainability—define who we are and guide every project we undertake.
          We strive to exceed client expectations while building trust and
          fostering collaboration.
        </p>
        <Link
          href="/about"
          className=" flex gap-3 group items-center px-3 md:px-6 py-2 md:py-4 bg-primary-blue  w-fit rounded-lg hover:bg-primary-blue/90 duration-200 cursor-pointer "
        >
          <p className=" text-white md:text-lg font-semibold ">About US</p>
          <ArrowRight
            size={22}
            className=" group-hover:-rotate-45 duration-200 text-white"
          />
        </Link>
      </div>
      <div className="w-full max-h-64 sm:max-h-none rounded-xl overflow-hidden">
        <img src="./about-us-BIG.jpg" alt="" />
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const expertiseData = [
    {
      title: 'Industry Expertise',
      description:
        'Our extensive experience enables us to deliver top-tier projects on time and within budget.',
    },
    {
      title: 'Sustainable Practices',
      description:
        'We believe in building a better future. Our projects incorporate sustainable materials and energy-efficient systems, reducing environmental impact.',
    },
    {
      title: 'Innovation-Driven',
      description:
        'Our team is always at the forefront of construction technology and modern techniques, embracing innovation.',
    },
  ];
  return (
    <div className=" w-full max-w-7xl mx-auto px-4 flex flex-col gap-12 py-10 sm:py-16 md:flex-row">
      <div className=" w-full flex flex-col justify-between gap-6">
        <div className=" space-y-2">
          <p className=" text-gray-700">[ Why choose Us ]</p>
          <p className=" text-3xl md:text-5xl ">
            The Right Partner for Your Project
          </p>
        </div>
        <p className=" text-gray-600 md:text-lg">
          Choosing conc means partnering with a team that values quality,
          reliability, and innovation. We bring together decades of experience,
          skilled craftsmanship, and a commitment to your satisfaction.
        </p>

        {expertiseData.map(({ title, description }, index) => {
          return (
            <div key={index} className=" flex flex-col gap-1">
              <p className=" text-xl md:text-2xl font-medium">{title}</p>
              <p className=" text-sm text-gray-700">{description}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full max-h-64 sm:max-h-none rounded-xl  overflow-hidden">
        <img
          src="./why-choose-us.jpg"
          className="rounded-xl h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

function LogoMarquee() {
  const logoArray = [
    './logo/logo1.png',
    './logo/logo2.svg',
    './logo/logo3.png',
    './logo/logo4.webp',
    './logo/logo5.png',
    './logo/logo6.webp',
    './logo/logo7.svg',
    './logo/logo8.png',
    './logo/logo9.jpeg',
    './logo/logo10.jpeg',
  ];
  return (
    <div className=" w-full py-8 md:py-16">
      <Marquee speed={100}>
        {logoArray.map((logo, index) => {
          return (
            <div key={index} className=" px-6 md:px-12">
              <img
                src={logo}
                key={index}
                className=" h-6 md:h-8 w-auto"
                alt=""
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

function ContactUs() {
  const stats = [
    { label: 'Years of Experience', value: '12+' },
    { label: 'Projects Completed', value: '45+' },
    { label: 'Clients Satisfaction Rate', value: '95%' },
  ];

  return (
    <div className="mt-8 w-full mx-auto max-w-7xl px-2">
      <div className="  py-8 px-4 md:px-10 bg-neutral-700 flex flex-col lg:flex-row gap-12 rounded-xl">
        <div className=" w-full flex flex-col gap-8 md:gap-12 justify-between">
          <div className=" space-y-2">
            <p className=" text-gray-100">[Contact Us]</p>
            <p className=" text-3xl md:text-5xl text-white ">
              leading the way in exceptional construction
            </p>
          </div>
          <Link
            href="/contact-us"
            className=" flex gap-3 group items-center px-3 md:px-6 py-2 md:py-4 bg-neutral-50  w-fit rounded-lg hover:bg-neutral-100 duration-200 cursor-pointer "
          >
            <p className=" text-primary-blue md:text-lg font-semibold ">
              Contact Us
            </p>
            <ArrowRight
              size={22}
              className=" group-hover:-rotate-45 duration-200 text-primary-blue font-medium"
            />
          </Link>
          <div className=" flex gap-6  w-full">
            {stats.map((stat, index) => {
              return (
                <div key={index} className=" flex flex-col gap-1">
                  <p className=" text-white text-2xl md:text-4xl font-semibold">
                    {stat.value}
                  </p>
                  <p className=" text-sm md:text-lg text-gray-200 ">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden lg:block w-auto h-full">
          <img src="./home-contactUS.jpg" className=" rounded-xl" alt="" />
        </div>
      </div>
    </div>
  );
}
