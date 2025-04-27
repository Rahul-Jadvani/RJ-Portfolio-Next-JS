"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Use dynamic import to avoid SSR issues with three.js
const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function GlobeContact() {
  // Configure the globe appearance and behavior
  const globeConfig = {
    pointSize: 3.5,
    globeColor: "#0f172a", // Dark slate color to match theme
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.15,
    emissive: "#0f172a",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8", // Light blue
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 500,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 12.9716, lng: 77.5946 }, // Bangalore coordinates
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  // Define connection arcs from Bangalore to various tech hubs
  const connectionArcs = [
    // Bangalore to San Francisco
    {
      order: 1,
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.4,
      color: "#06b6d4", // Cyan
    },
    // Bangalore to London
    {
      order: 2,
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: "#3b82f6", // Blue
    },
    // Bangalore to Tokyo
    {
      order: 3,
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: "#6366f1", // Indigo
    },
    // Bangalore to Singapore
    {
      order: 1,
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: "#06b6d4", // Cyan
    },
    // Bangalore to Sydney
    {
      order: 2,
      startLat: 12.9716,
      startLng: 77.5946,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.4,
      color: "#3b82f1", // Blue
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="h-[350px] lg:h-[596px] w-full rounded-lg overflow-hidden"
    >
      <World globeConfig={globeConfig} data={connectionArcs} />
    </motion.div>
  );
} 