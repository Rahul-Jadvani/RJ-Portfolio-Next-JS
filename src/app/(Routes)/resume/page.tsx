"use client";

import React from "react";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaJs, FaNodeJs, FaGithub } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiRecoil } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

// Data Types
type AboutInfo = {
  fieldName: string;
  fieldValue: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

type EducationItem = {
  ins: string;
  degree: string;
  duration: string;
};

type SkillItem = {
  icon: React.ReactNode;
  name: string;
};

// Data Objects
const experienceData: ExperienceItem[] = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2022-Present",
    description: "Worked on a variety of web development projects, including building responsive websites, single-page applications, and RESTful APIs using MERN stack and other modern technologies.",
  },
  {
    company: "Krsna Khadan",
    role: "Backend Developer",
    duration: "2024-Present",
    description: "Currently working on a project management website related to coal, focusing on backend architecture and database integration using Express.js, PostgreSQL, and AWS.",
  },
  {
    company: "100xDevs",
    role: "Full Stack Development Trainee",
    duration: "2023-2024",
    description: "Participated in the 0-1 Full Stack Development program, gaining hands-on experience in building scalable web applications and improving collaboration and coding skills.",
  },
  {
    company: "Student Projects",
    role: "Project Contributor",
    duration: "2020-2026",
    description: "Contributed to multiple academic projects focusing on web development, including a simplified version of Atlassian's Jira, honing skills in teamwork, project management, and software development.",
  },
];

const aboutData: AboutInfo[] = [
  { fieldName: "Name", fieldValue: "Rahul Jadvani" },
  { fieldName: "Phone", fieldValue: "+91 6362-050-449" },
  { fieldName: "Experience", fieldValue: "2+ Months" },
  { fieldName: "Discord", fieldValue: "abyss.47" },
  { fieldName: "Nationality", fieldValue: "Indian" },
  { fieldName: "Email", fieldValue: "rahuljadvani24@gmail.com" },
  { fieldName: "Freelance", fieldValue: "Available" },
  { fieldName: "Languages", fieldValue: "English, Hindi, Gujarati, Kannada" },
];

const educationData: EducationItem[] = [
  { ins: "Sindhi High School", degree: "Primary Education (10th)", duration: "2007-2020" },
  { ins: "Presidency PU College", degree: "Secondary Education (12th)", duration: "2020-2022" },
  { ins: "Dayananda Sagar University", degree: "B.Tech in CSE", duration: "2022-2026" },
  { ins: "100xDevs", degree: "Full Stack Developer", duration: "2023-2024" },
];

const skillsData: SkillItem[] = [
  { icon: <FaHtml5 />, name: "HTML 5" },
  { icon: <FaCss3 />, name: "CSS 3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiRecoil />, name: "Recoil" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <FaGithub />, name: "Git & GitHub" },
  { icon: <FaFigma />, name: "Figma" },
];

const Resume: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6, ease: "easeIn" } }}
    className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="About" className="flex flex-col lg:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] h-[300px] mx-auto lg:mx-0 gap-6">
          <TabsTrigger value="About">About Me</TabsTrigger>
          <TabsTrigger value="Education">Education</TabsTrigger>
          <TabsTrigger value="Experience">Experience</TabsTrigger>
          <TabsTrigger value="Skills">Skills</TabsTrigger>
        </TabsList>

        <div className="lg:min-h-[70vh] w-full">
          {/* About Me Section */}
          <TabsContent value="About" className="h-full w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-justify items-center justify-center">
              <h3 className="text-4xl font-bold text-center">About Me</h3>
              <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 tracking-tight text-base mb-6 lg:mb-4 xl:ml-40">
                I'm Rahul Jadvani, a problem-solver at heart who loves finding creative solutions to everyday challenges. When I'm not working, you can find me exploring new ideas, or just enjoying a good T.V show/Anime.
              </p>
              {/* Carousel for About Me Section */}
              <Carousel
                plugins={[Autoplay({ delay: 2500 })]}
                opts={{ align: "start", loop: true }}
                orientation="vertical"
                className="w-full max-w-md mt-16 flex justify-center items-center lg:hidden"
              >
                <CarouselContent className="h-[160px]">
                  {aboutData.map((item) => (
                    <CarouselItem key={item.fieldName} className="w-[300px]">
                      <Card className="h-[142px]">
                        <CardHeader className="flex flex-col items-center justify-center gap-6 group">
                          <CardTitle>
                            <h3 className="font-extrabold text-accent">{item.fieldName}</h3>
                          </CardTitle>
                          <CardDescription>
                            <p className="text-[1.1rem] font-bold group-hover:text-white">{item.fieldValue}</p>
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2500,
                    }),
                  ]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="hidden lg:flex items-center justify-center max-w-2xl lg:mt-40"
                >
                  <CarouselContent>
                    {
                      aboutData.map((item) => {
                        return (
                          <CarouselItem key={item.fieldName} className='pl-6 basis-1/2 w-[84px]'>
                            <Card className='h-[160px]'>
                              <CardHeader className='flex flex-col items-center justify-center gap-6 group'>
                                <CardTitle>
                                  <h3 className='font-extrabold text-accent'>{item.fieldName}</h3>
                                </CardTitle>
                                <CardDescription>
                                  <p className='text-[1.1rem] font-bold group-hover:text-white'>{item.fieldValue}</p>
                                </CardDescription>
                              </CardHeader>
                            </Card>
                          </CarouselItem>
                        )
                      })
                    }
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>

            </div>
          </TabsContent>

          {/* Education Section */}
          <TabsContent value="Education" className="h-full w-full">
            <ScrollArea className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">My Education</h3>
                <p className="text-white/60 tracking-tight mb-6 text-center lg:text-left">
                  My educational journey has been marked by a commitment to excellence and a passion for learning. I completed my 10th grade with a score of 91.6%, followed by a 94.5% in my 12th grade. At university, I maintained this momentum and obtained a GPA of 9.35, consistently striving to deepen my knowledge and skills.
                </p>
                {educationData.map((item) => (
                  <Card key={item.degree} className="mx-auto lg:mx-0">
                    <CardHeader>
                      <CardTitle>{item.ins}</CardTitle>
                      <CardDescription>{item.degree}</CardDescription>
                      <CardContent>
                        <p>{item.duration}</p>
                      </CardContent>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          {/* Experience Section */}
          <TabsContent value="Experience" className="h-full w-full">
            <ScrollArea className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">My Experience</h3>
                <p className="text-white/60 tracking-tight mb-6 text-center lg:text-left">
                  Throughout my career, I've been dedicated to applying my technical skills in real-world scenarios. From hands-on development in full stack projects to collaborating with diverse teams, I've consistently sought opportunities to learn and grow. My experiences have enabled me to refine my problem-solving abilities and deliver high-quality software solutions.
                </p>
                {experienceData.map((item) => (
                  <Card key={item.role} className="mx-auto lg:mx-0">
                    <CardHeader>
                      <CardTitle>{item.company}</CardTitle>
                      <CardDescription>{item.role}</CardDescription>
                      <CardContent>
                        <p>{item.duration}</p>
                        <p>{item.description}</p>
                      </CardContent>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          {/* Skills Section */}
          <TabsContent value="Skills" className="h-full w-full">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">My Skills</h3>
              <p className="text-white/60 tracking-tight mb-6 text-center lg:text-left">
                I specialize in building full-stack web applications using a variety of modern technologies. From crafting elegant front-end designs to developing robust back-end solutions, I am committed to delivering high-quality, scalable, and user-friendly software solutions.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {skillsData.map((skill) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="p-4 bg-secondary rounded-full">
                            {skill.icon}
                          </div>
                          <p className="text-sm font-bold">{skill.name}</p>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
);

export default Resume;
