import React from 'react';

interface ButtonProps {
    title: string;
}

const Buttonui = ({ title }: ButtonProps) => {
    return (
        <button className="inline-flex h-6 animate-shimmer items-center justify-center rounded-lg border border-accent bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-hover focus:ring-offset-2 focus:ring-offset-accent-hover">
            {title}
        </button>
    );
};

export default Buttonui;
