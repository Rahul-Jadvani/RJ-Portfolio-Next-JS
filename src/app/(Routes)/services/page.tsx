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
    des: "I create responsive, scalable websites using Tailwind CSS, TypeScript, React.js, and Next.js. My focus is on performance, accessibility, and seamless user experiences.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    des: "I design visually engaging interfaces with Figma and Wix Studio, focusing on user-centered design principles to boost engagement and align with brand goals.",
    href: "",
  },
  {
    num: "03",
    title: "Custom Software Development",
    des: "I develop bespoke software solutions using the MERN stack and serverless architectures, ensuring reliability, scalability, and a perfect fit for business needs.",
    href: "",
  },
  {
    num: "04",
    title: "Project Management",
    des: "I lead projects with strategic planning, agile methodologies, and collaboration tools like Linear, ensuring high efficiency, transparency, and timely delivery.",
    href: "",
  },
  {
    num: "05",
    title: "Blockchain & Web3 Solutions",
    des: "I create decentralized applications (dApps), smart contracts, and token economies using Solidity, Hardhat, and Polygon, ensuring security, scalability, and transparency.",
    href: "",
  },
  {
    num: "06",
    title: "AI & Data Science",
    des: "I build AI models for real-world impact using TensorFlow, scikit-learn, and custom data pipelines, specializing in predictive analytics, automation, and recommendation systems.",
    href: "",
  },
  {
    num: "07",
    title: "Gamification & Community Platforms",
    des: "I design engaging community ecosystems with leaderboards, reward systems, and DAO governance, boosting user participation and platform growth.",
    href: "",
  },
  {
    num: "08",
    title: "SaaS Product Development",
    des: "I architect and launch SaaS products with a focus on modularity, user acquisition, and cloud-native performance, leveraging AWS, and scalable microservices.",
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
              <div className="border-b border-accent-hover w-full mb-8"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
