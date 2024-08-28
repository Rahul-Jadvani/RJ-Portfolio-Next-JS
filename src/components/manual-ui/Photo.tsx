'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo: FC = () => {
    return (
        <div className="relative w-full h-full flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.2, duration: 0.6, ease: 'easeInOut' }
                }}
            >
                {/* Responsive container for the image */}
                <motion.div className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten absolute mb-10 lg:mb-0"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.6, duration: 0.6, ease: 'easeInOut' }
                    }}>
                    <Image
                        src="/assets/photo.png"
                        alt="Profile photo of Rahul Jadvani"
                        priority
                        quality={100}
                        fill
                        className="object-contain rounded-full"
                    />
                </motion.div>

                {/* SVG Circle Animation */}
                <motion.svg
                    className='w-[300px] lg:w-[506px] h-[300px] lg:h-[506px] mb-10 lg:mb-0'
                    fill='transparent'
                    viewBox='0 0 506 506'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-label="Animated circular border"
                >
                    <motion.circle
                        cx='253'
                        cy='253'
                        r='250'
                        stroke='#1093eb'
                        strokeWidth='4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        initial={{ strokeDasharray: '24 10 0 0' }}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '11 25 92 72', '6 250 22 22'],
                            rotate:[90,360]
                        }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror' }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
