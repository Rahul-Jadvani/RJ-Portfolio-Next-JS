'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Import GlobeContact using dynamic import to avoid SSR issues
const GlobeContact = dynamic(() => import('@/components/ui/globe-contact'), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-full"></div>
});

const Photo: FC = () => (
  <div className="relative w-full h-full flex justify-center items-center">
    
      {/* Circle container with Globe inside */}
      <div className="relative w-[300px] lg:w-[496px] h-[270px] lg:h-[496px] mb-10 lg:mb-0">
        {/* Globe inside the circle */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.6, duration: 0.6, ease: "easeInOut" },
          }}
        >
          <Suspense fallback={<div className="h-full w-full rounded-full"></div>}>
            <div className="w-full h-full translate-y-[-9%] translate-x-1">
              <GlobeContact />
            </div>
          </Suspense>
        </motion.div>


        <motion.svg
          className="-z-10 relative w-[300px] lg:w-[506px] h-[300px] lg:h-[506px] mb-10 lg:mb-0"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Animated circular border"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#1093eb"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "11 25 92 72", "6 250 22 22"],
              rotate: [90, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.svg>
      </div>
  </div>
);

export default Photo;
