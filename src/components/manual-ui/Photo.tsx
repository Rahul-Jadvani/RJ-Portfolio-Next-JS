'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Globe component with SSR disabled
const Globe = dynamic(() => import('@/components/ui/globe').then(mod => ({ default: mod.Globe })), {
  ssr: false
});

const Photo: FC = () => {
    // Sample data for the Globe component
    const globeData = [
  {
    order: 1,
    startLat: 40.7128, // New York
    startLng: -74.0060,
    endLat: 51.5074,  // London
    endLng: -0.1278,
    arcAlt: 0.3,      // Arc altitude/curvature
    color: "#4cc9f0"  // Arc color
  },
  {
    order: 2,
    startLat: 37.7749, // San Francisco
    startLng: -122.4194,
    endLat: 35.6762,   // Tokyo
    endLng: 139.6503,
    arcAlt: 0.5,
    color: "#f72585"
  }
];

// Globe configuration
const globeConfig = {
  globeColor: "#1d072e",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  autoRotate: true,
  autoRotateSpeed: 1
};

    return (
      <div className="relative w-full h-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.6, ease: "easeInOut" },
          }}
          className="relative"
        >
          {/* Circle container with Globe inside */}
          <div className="relative w-[300px] lg:w-[506px] h-[300px] lg:h-[506px] mb-10 lg:mb-0">
            {/* Globe inside the circle */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.6, duration: 0.6, ease: "easeInOut" },
              }}
              style={{ clipPath: 'circle(50%)' }}
            >
              <Suspense fallback={null}>
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 75 }}
                  className="w-full h-full"
                >
                  <Globe globeConfig={globeConfig} data={globeData} />
                </Canvas>
              </Suspense>
            </motion.div>
            
            {/* SVG Circle Animation - acts as a border */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
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
        </motion.div>
      </div>
    );
};

export default Photo;
