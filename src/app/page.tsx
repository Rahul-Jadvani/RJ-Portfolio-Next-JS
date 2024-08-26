import Image from "next/image";
import Buttonui from '@/components/ui/buttonui'; // Assuming this is the correct import path
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Socials from '../components/manual-ui/Socials';
import Photo from '../components/manual-ui/Photo';
import Stats from '../components/manual-ui/Stats';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start lg:mt-14 lg:gap-x-20 mt-0">
        {/* Text and Introduction Section */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 order-2 lg:order-none -tracking-tighter">
          <span className="text-xl font-semibold">Software Developer</span>
          <h1 className="text-3xl font-bold mt-2">
            Hey! I'm <br />
            <span className="text-accent">Rahul Jadvani</span>
          </h1>
          <p className="max-w-[600px] mb-10 text-white/80 font-semibold mt-4">
            I'm a full-stack developer with a strong focus on Data Structures and Algorithms (DSA). I build efficient, scalable applications using React, Next.js, Node.js, and MongoDB, and I'm proficient in C, C++, Python, JavaScript, and TypeScript. Let's connect and create something amazing together!
          </p>
          {/* Call-to-Action Buttons and Social Media Links */}
          <div className="flex flex-col items-center lg:flex-row gap-8">
            {/* Download CV Button */}
            <Link href="/resume/resume.pdf" passHref> 
              <Button
                variant="ghost"
                size="sm"
                className="w-56 h-12 rounded-full bg-none border-2 border-accent hover:bg-accent-hover hover:scale-105 hover:border-accent/10 hover:shadow-accent shadow-inner duration-400 gap-2"
                aria-label="Download Resume"
              >
                <span>Download resume</span> <FiDownload />
              </Button>
            </Link>
            {/* Social Media Links */}
            <div className="order-1 lg:order-none">
              <Socials />
            </div>
          </div>
        </div>
        {/* Photo Section */}
        <div>
          <Photo />
        </div>
      </div>
      <Stats/>
    </section>
  );
}
