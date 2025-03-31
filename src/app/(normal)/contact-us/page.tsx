'use client';
import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { Loader } from 'lucide-react';

export const runtime = 'edge';

export default function ContactPage() {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setIsLoading(true);
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const message = messageRef.current?.value;

    const data = {
      fullName,
      email,
      phone,
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
    phoneRef.current!.value = '';
    messageRef.current!.value = '';

    setIsLoading(false);
  };

  return (
    <div className=" max-w-7xl mx-auto mt-32  w-full px-2">
      <div className=" border rounded-3xl p-4 md:p-6  flex flex-col md:flex-row gap-12">
        <div className=" w-full max-w-xl">
          <img
            src="/contact-us.jpg"
            className=" rounded-xl w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-full space-y-4 pb-4 md:pb-0 md:space-y-6">
          <p className=" text-4xl font-medium">Lets&apos;s talk</p>
          <p className="text-gray-600">
            Have a project in mind? Let’s discuss how we can bring your vision
            to life.
          </p>
          <div className=" space-y-4">
            <div className=" space-y-1.5 w-full">
              <p>Full Name</p>
              <input
                ref={fullNameRef}
                type="text"
                className=" py-2 px-3 rounded w-full border"
              />
            </div>
            <div className=" flex flex-col md:flex-row gap-4">
              <div className=" space-y-1.5 w-full">
                <p>Email</p>
                <input
                  ref={emailRef}
                  type="text"
                  className=" py-2 px-3 rounded w-full border"
                />
              </div>
              <div className=" space-y-1.5 w-full">
                <p>Contact</p>
                <input
                  ref={phoneRef}
                  type="text"
                  className=" py-2 px-3 rounded w-full border"
                />
              </div>
            </div>
            <div className=" space-y-1.5">
              <p>Message</p>
              <textarea
                ref={messageRef}
                rows={4}
                className=" py-2 px-3 rounded w-full border"
              />
            </div>{' '}
          </div>
          {submitMessage === 'Form submitted successfully' ? (
            <p className=" text-green-600">{submitMessage}</p>
          ) : (
            <p className=" text-red-600">{submitMessage}</p>
          )}
          <div
            onClick={handleSubmit}
            className=" w-full min-w-32 text-center sm:w-fit px-4 py-2.5 md:py-2 rounded-lg bg-primary-blue text-white cursor-pointer  hover:bg-primary-blue/90 duration-200"
          >
            {isLoading ? (
              <div className=" w-fit m-auto">
                <Loader className=" duration-1000 animate-spin" />
              </div>
            ) : (
              <p className=" mx-auto">Send Message</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
