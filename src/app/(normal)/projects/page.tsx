'use client';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import { projectsData } from '@/consts/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';

const headingVariants = {
  slideIn: {
    initial: { y: 100, scale: 0.8, opacity: 0.6 },
    whileInView: {
      y: 0,
      opacity: 1,
      scale: 1,
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

export default function ProjectsPage() {
  const variant = 'slideIn';
  return (
    <div className="bg-gray-100">
      <NavBar />
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-[url('/construction-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.h1
          initial={headingVariants[variant].initial}
          whileInView={headingVariants[variant].whileInView}
          viewport={{ once: true }}
          className="relative z-10 text-5xl font-bold text-white text-center"
        >
          Our Projects
        </motion.h1>
      </section>

      {/* Projects Listing */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div className="flex flex-col gap-16">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={headingVariants[variant].initial}
              whileInView={headingVariants[variant].whileInView}
              viewport={{ once: true }}
              className="bg-white min-h-80 flex flex-col md:flex-row gap-4 shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image container with relative positioning */}
              <div className="relative w-full h-80">
                {' '}
                {/* Set a height here */}
                {project.image && (
                  <Image
                    src={`/${project.image}`}
                    alt={project.name}
                    fill
                    style={{ objectFit: 'cover' }} // Ensure image covers the space
                  />
                )}
              </div>
              <div className="w-full p-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {project.name}
                </h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <ul className="mt-4 text-sm text-gray-700">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <span
                  className={`mt-4 inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
