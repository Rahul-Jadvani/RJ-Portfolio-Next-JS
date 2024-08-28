"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectButton from '../../../components/manual-ui/ProjectButton';

type Project = {
  num: string;
  category: string;
  title: string;
  desc: string;
  stack: { name: string }[];
  img: string;
  live: string;
  github: string;
};

const projectData: Project[] = [
  {
    num: "01",
    category: "MERN Stack",
    title: "Payments App",
    desc: "This is a full-stack payment application built using Node.js, Express.js, React, and MongoDB. The app is designed to provide secure financial transactions with a user-friendly interface.",
    stack: [
      { name: "React JS" },
      { name: "Mongo DB" },
      { name: "Node JS" },
      { name: "Express JS" },
    ],
    img: "/assets/prjx/paytm.png",
    live: "https://payments-app-using-mern.vercel.app",
    github: "https://github.com/Rahul-Jadvani/Payments-App.git",
  },
  {
    num: "02",
    category: "MERN Stack",
    title: "Payments App",
    desc: "This is a full-stack payment application built using Node.js, Express.js, React, and MongoDB. The app is designed to provide secure financial transactions with a user-friendly interface.",
    stack: [
      { name: "React JS" },
      { name: "Mongo DB" },
      { name: "Node JS" },
      { name: "Express JS" },
    ],
    img: "/assets/prjx/paytm.png",
    live: "https://payments-app-using-mern.vercel.app",
    github: "https://github.com/Rahul-Jadvani/Payments-App.git",
  },
];

const Projects: React.FC = () => {
  const [project, setProject] = useState<Project>(projectData[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectData[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:1.6, duration: 0.6, ease:'easeInOut'} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[16px]">
          <div className="w-full lg:w-[50%] lg:h-[500px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl lg:text-8xl leading-none font-extrabold text-outline text-transparent">
                {project.num}
              </div>
              <h2 className="text-[36px] lg:text-[40px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.desc}</p>
              <ul className="flex gap-4">
                {project.stack.map((p, i) => (
                  <li key={p.name} className="text-lg text-accent">
                    {p.name}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-accent/60"></div>
              <div className="flex items-center gap-2">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <div className="group w-[80px] h-[80px] flex justify-center items-center">
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-slate-900/90 flex justify-center items-center group-hover:bg-accent-hover group-hover:text-primary group-hover:shadow-inner group-hover:shadow-accent border-2 border-slate-900/90 group-hover:border-accent-hover group-hover:scale-110">
                          <BsArrowUpRight className="text-2xl group-hover:rotate-45 transition-all duration-500" />
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </div>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <div className="group w-[80px] h-[80px] flex justify-center items-center">
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-slate-900/90 flex justify-center items-center group-hover:bg-accent-hover group-hover:text-primary group-hover:shadow-inner group-hover:shadow-accent border-2 border-slate-900/90 group-hover:border-accent-hover group-hover:scale-110">
                          <BsGithub className="text-2xl transition-all duration-500" />
                          <TooltipContent>
                            <p>GitHub</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </div>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="lg:h-[560px] mb-12" onSlideChange={handleSlideChange}>
              {projectData.map((p) => (
                <SwiperSlide key={p.num} className="w-full">
                  <div className="h-[500px] relative group flex justify-center items-center bg-slate-900/90">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/5 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={p.img} fill className="object-cover" alt="photo" priority quality={100}/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <ProjectButton></ProjectButton>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
