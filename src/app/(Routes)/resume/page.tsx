"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma, FaJs, FaNodeJs, FaGithub } from 'react-icons/fa6';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiRecoil } from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface AboutInfo {
  fieldName: string;
  fieldValue: string;
}

interface EducationItem {
  ins: string;
  degree: string;
  duration: string;
}

interface Skill {
  icon: JSX.Element;
  name: string;
}

const experience = {
  icon: "",  // You can add an icon here if you'd like, using a similar method as for skills
  title: 'My Experience',
  desc: "Throughout my career, I've been dedicated to applying my technical skills in real-world scenarios. From hands-on development in full stack projects to collaborating with diverse teams, I've consistently sought opportunities to learn and grow. My experiences have enabled me to refine my problem-solving abilities and deliver high-quality software solutions.",
  items: [
    {
      company: "Freelance",
      role: 'Full Stack Developer',
      duration: '2022-Present',
      description: 'Worked on a variety of web development projects, including building responsive websites, single-page applications, and RESTful APIs using MERN stack and other modern technologies.'
    },
    {
      company: "Krsna Khadan",
      role: 'Backend Developer',
      duration: '2024-Present',
      description: 'Currently working on a project management website related to coal, focusing on backend architecture and database integration using Express.js, PostgreSQL, and AWS.'
    },
    {
      company: "100xDevs",
      role: 'Full Stack Development Trainee',
      duration: '2023-2024',
      description: 'Participated in the 0-1 Full Stack Development program, gaining hands-on experience in building scalable web applications and improving collaboration and coding skills.'
    },
    {
      company: "Student Projects",
      role: 'Project Contributor',
      duration: '2020-2026',
      description: 'Contributed to multiple academic projects focusing on web development, including a simplified version of Atlassian\'s Jira, honing skills in teamwork, project management, and software development.'
    }
  ] as ExperienceItem[]
};

const about = {
  title: 'About Me',
  desc: 'I\'m Rahul Jadvani, a problem-solver at heart who loves finding creative solutions to everyday challenges. When I\'m not working, you can find me exploring new ideas, or just enjoying a good T.V show/Anime.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rahul Jadvani"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 6362-050-449"
    },
    {
      fieldName: "experience",
      fieldValue: "2+ Months"
    },
    {
      fieldName: "Discord",
      fieldValue: "abyss.47"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "rahuljadvani24@gmail.com"
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Gujarati, Kannada"
    },
  ] as AboutInfo[]
};

const education = {
  icon: "",
  title: 'My Education',
  desc: "My educational journey has been marked by a commitment to excellence and a passion for learning. I completed my 10th grade with a score of 91.6%, followed by a 94.5% in my 12th grade. At university, I maintained this momentum and obtained a GPA of 9.35, consistently striving to deepen my knowledge and skills.",
  items: [
    {
      ins: "Sindhi High School",
      degree: 'Primary Education (10th)',
      duration: '2007-2020'
    },
    {
      ins: "Presidency PU College",
      degree: 'Secondary Education (12th)',
      duration: '2020-2022'
    },
    {
      ins: "Dayananda Sagar University",
      degree: 'B.Tech in CSE',
      duration: '2022-2026'
    },
    {
      ins: "100xDevs",
      degree: 'Full Stack Developer',
      duration: '2023-2024'
    },
  ] as EducationItem[]
};

const skills = {
  title: "My Skills",
  desc: "I specialize in building full-stack web applications using a variety of modern technologies. From crafting elegant front-end designs to developing robust back-end solutions, I am committed to delivering high-quality, scalable, and user-friendly software solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript'
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript'
    },
    {
      icon: <FaReact />,
      name: 'React.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js'
    },
    {
      icon: <SiRecoil />,
      name: 'Recoil'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js'
    },
    {
      icon: <SiExpress />,
      name: 'Express.js'
    },
    {
      icon: <FaGithub />,
      name: 'Git & GitHub'
    },
    {
      icon: <FaFigma />,
      name: 'Figma'
    }
  ] as Skill[]
};

const Resume: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.6, ease: "easeIn" }
      }}
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
            <TabsContent value="About" className='h-full w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-justify items-center justify-center">
                <h3 className="text-4xl font-bold text-center">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 tracking-tight text-base mb-6 lg:mb-4 xl:ml-40">
                  {about.desc}
                </p>
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 2500,
                    }),
                  ]}
                  opts={{
                    align: "start",
                    loop: true
                  }}
                  orientation="vertical"
                  className="w-full max-w-md mt-16 flex justify-center items-center lg:hidden"
                >
                  <CarouselContent className="h-[160px]">
                    {about.info.map((item) => (
                      <CarouselItem key={item.fieldName} className="w-[300px]">
                        <Card className="h-[142px]">
                          {/* Content inside card */}
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
                      about.info.map((item) => {
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

            <TabsContent value="Education" className='h-full w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-justify">
                <h3 className="text-4xl font-bold text-center">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 tracking-tight text-base mb-6 lg:mb-4 xl:ml-40">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:min-w-[500px]">
                    {education.items.map((item) => (
                      <li
                        key={item.ins}
                        className="bg-slate-900/90 h-[184px] py-6 px-6 flex flex-col justify-center items-center lg:items-start gap-2 rounded-lg lg:text-left text-base"
                      >
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.ins}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="Experience" className='h-full w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-justify">
                <h3 className="text-4xl font-bold text-center">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 tracking-tight text-base mb-6 lg:mb-4 xl:ml-40">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:min-w-[500px]">
                    {experience.items.map((item) => (
                      <li
                        key={item.description}
                        className="bg-slate-900/90 h-[184px] py-6 px-6 flex flex-col justify-center items-center lg:items-start gap-3 rounded-lg lg:text-left text-base"
                      >
                        <span className="text-accent-hover">{item.duration}</span>
                        <h3 className="text-xl">{item.role}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="Skills" className='h-full w-full'>
              <div className="flex flex-col gap-[30px] text-center xl:text-justify">
                <div className="flex flex-col gap-[30px] text-center xl:text-justify">
                  <h3 className='text-4xl font-bold text-center'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0 tracking-tight text-base mb-6 lg:mb-4 xl:ml-40'>{skills.desc}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg: gap-4 lg:gap-8'>
                  {skills.skillList.map((skill) => {
                    return (
                      <li key={skill.name}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <div className='group'>
                              <TooltipTrigger className='w-full h-[152px] bg-slate-900/90 rounded-xl flex justify-center items-center group-hover:text-accent-hover group-hover:bg-primary group-hover:border-accent group-hover:border-2 group-hover:shadow-inner group-hover:shadow-accent-hover transition-all duration-300 hover:scale-110'>
                                <div className='text-6xl flex items-center justify-center flex-col'>
                                  {skill.icon}
                                  <p className='text-xs mt-6'>{skill.name}</p>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className='capitalize'>
                                  {skill.name}
                                </div>
                              </TooltipContent>
                            </div>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume
