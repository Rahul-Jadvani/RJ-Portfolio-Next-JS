"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface PageTransitionProps {
    children?: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({children}) => {
    const pathname = usePathname();

    return (
            <AnimatePresence>
                <div key={pathname} >
                    <motion.div
                        initial={{ opacity: 1, z:-1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay:0.4,duration: 0.6, ease: "easeInOut", z:5},
                        }}
                        exit={{opacity:1, transition:{delay:0.4, ease:'easeInOut', z:-1}}}
                        className="transition bg-primary h-screen w-screen fixed top-0 left-0 flex justify-center items-center text-white font-extrabold text-xl md:text-2xl pointer-events-none"
                    >
                        <div>
                            Rahul Jadvani's
                            <span className="text-2xl font-extrabold text-accent-hover"> PORTFOLIO</span>
                        </div>
                    </motion.div>
            </div>
            {children}
            </AnimatePresence>
    );
};

export default PageTransition;
