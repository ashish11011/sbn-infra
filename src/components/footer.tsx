'use client';
import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { InstagramIcon, LinkedinIcon } from 'lucide-react';
const Footer = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    const data = {
      fullName,
      email,
      message,
      time: new Date().toLocaleString(),
    };

    emailjs.init({
      publicKey: 'cS-Oqhga_0BhxIC_K',
    });

    emailjs.send('service_jyqol9s', 'template_gvsej1m', data).then(
      (response) => {
        setSubmitMessage('Form submitted successfully');
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        setSubmitMessage('Form submission failed');
        console.log('FAILED...', error);
      }
    );

    fullNameRef.current!.value = '';
    emailRef.current!.value = '';
    messageRef.current!.value = '';

    setIsLoading(false);
  };

  return (
    <div className=" mt-12 pb-8 relative min-h-80 h-full w-full md:px-12">
      <img
        src="/footer.jpg"
        className=" absolute top-0 left-0 w-full h-full object-cover"
        alt="footer"
      />

      {/* content of footer */}
      <div className="relative z-[50] max-w-7xl mx-auto px-8 pt-16 pb-4 text-white flex h-full min-h-80 flex-col justify-between gap-6">
        <div className=" flex gap-6 flex-col md:flex-row">
          <div className=" flex flex-col gap-1 w-full max-w-96 text-sm font-medium">
            <p className=" text-3xl font-semibold">
              SBN INFRA PROJECT PRIVATE LIMITED
            </p>
            <p className=" mt-6">PLOT NO.-113,SECTOR -2</p>
            <p>
              PHASE-1,H.S.I.I.D.C.I.M.T, BAWAL, REWARI, HARYANA 123501, INDIA.
            </p>
            <div className=" flex gap-2 mt-4">
              <p>Phone :</p>
              <div className=" flex flex-col gap-2">
                <Link href={'tel:+91-01284-264500'} className="">
                  +91-01284-264500
                </Link>
                <Link href={'tel:01284-23264412'} className="">
                  01284-23264412
                </Link>
              </div>
            </div>

            <Link className=" mt-2" href={'mailto:info@sbninfra.in'}>
              Email: info@sbninfra.in
            </Link>
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
            <div className=" flex gap-4 items-center  mt-auto ">
              <Link
                href={'http://www.linkedin.com/in/sbn-infra-691a68349'}
                className="hover:scale-125 duration-200 cursor-pointer"
              >
                <LinkedinIcon size={24} />
              </Link>
              <Link
                href={
                  'https://www.instagram.com/sbninfra?igsh=MW95bDNnNHhmcHk2MA%3D%3D&utm_source=qr'
                }
                className="hover:scale-125 duration-200 cursor-pointer"
              >
                <InstagramIcon size={24} />
              </Link>
            </div>
          </div>
          <div className=" ml-auto w-full md:max-w-96">
            <p className=" font-medium text-xl">Contact Us</p>
            <input
              ref={fullNameRef}
              type="text"
              placeholder="Name"
              className=" px-3 py-2 mt-3 w-full bg-transparent border border-gray-500 rounded-md"
            />
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className=" px-3 py-2 mt-3 w-full bg-transparent border border-gray-500 rounded-md"
            />
            <input
              ref={messageRef}
              type="text"
              placeholder="Message"
              className=" px-3 py-2 mt-3 w-full bg-transparent border border-gray-500 rounded-md"
            />
            {submitMessage && (
              <p className=" mt-3 text-sm text-green-500">{submitMessage}</p>
            )}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className=" px-3 py-2 mt-3 w-full bg-primary-blue text-white rounded-md font-semibold"
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
        {/* <div className=" mt-auto border-t text-white border-gray-500">
          <p className=" mx-auto mt-3 text-xs md:text-sm text-center max-w-2xl">
            Lorem ipsum ur adipisicing elit. Ad facere impedit magni qui ex,
            consequatur aliquam hic at in voluptas. Excepturi mollitia sapiente
            asperiores similique quae?
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;

const navLinks = [
  { name: 'Home', slug: '/' },
  { name: 'Projects', slug: '/projects' },
  { name: 'Careers', slug: '/careers' },
  { name: 'About Us', slug: '/about-us' },
  { name: 'Contact us', slug: '/contact-us' },
];
