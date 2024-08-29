"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

// Define the type for each service
interface Service {
  num: string;
  title: string;
  des: string;
  href: string;
}

// Array of services with the defined type
const services: Service[] = [
  {
    num: "01",
    title: "Web Development",
    des: "I create responsive, scalable websites using Tailwind CSS, TypeScript, React.js, and Next.js. My focus is on performance and accessibility for a great user experience.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    des: "I design visually appealing interfaces using tools like Figma and Wix Studio. My designs focus on UX/UI principles to enhance user engagement and align with client branding.",
    href: "",
  },
  {
    num: "03",
    title: "Custom Software Development",
    des: "I build custom software solutions tailored to client needs using the MERN stack. My approach ensures scalable, reliable applications that meet business goals.",
    href: "",
  },
  {
    num: "04",
    title: "Project Management",
    des: "I manage projects with careful planning, and team collaboration. Using tools like Linear, I ensure projects are delivered on time and efficiently.",
    href: "",
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col py-16 lg:py-0 justify-center items-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.6, duration: 0.6, ease: "easeIn" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] tracking-tighter"
        >
          {services.map((service) => (
            <div key={service.num} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-14 h-14 bg-white rounded-full text-black hover:text-white text-2xl group-hover:bg-accent-hover transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                >
                  <BsArrowDownRight />
                </Link>
              </div>
              <h2 className="text-2xl group-hover:text-accent-hover transition-all duration-300 font-bold text-outline text-transparent group-hover:text-outline-hover tracking-normal">
                {service.title}
              </h2>
              <p className="text-white">{service.des}</p>
              <div className="border-b border-accent-hover w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
