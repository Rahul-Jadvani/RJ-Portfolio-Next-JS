import Image from "next/image";
import Buttonui from '@/components/ui/buttonui'; // Assuming this is the correct import path
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiDownload} from 'react-icons/fi'
import Socials from '../components/Socials';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start mt-14">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <span className="text-xl font-semibold">Software Developer</span>
          <h1 className="text-4xl font-bold mt-2">
            Yo! I'm <br />
            <span className="text-accent">Rahul Jadvani</span>
          </h1>
          <p className="max-w-[600px] mb-10 text-white/80 font-semibold mt-4">
            I'm a full-stack developer with a strong focus on Data Structures and Algorithms (DSA). I build efficient, scalable applications using React, Next.js, Node.js, and MongoDB, and I'm proficient in C, C++, Python, JavaScript, and TypeScript. Let's connect and create something amazing together!
          </p>
          <div className="flex flex-col items-center md:flex-row gap-8">
            <Button variant='ghost' size='sm' className="w-36 rounded-2xl bg-none border-2 border-accent hover:bg-accent-hover hover:scale-105 hover:border-accent/10 hover:shadow-accent shadow-inner duration-500 gap-2"><span>Download CV</span> <FiDownload /></Button>
            <div className="mb-8 md:mb-0">
              <Socials/>
            </div>
          </div>
          </div>
        <div className="">
          Pic
        </div>
      </div>
    </section>
  );
}
