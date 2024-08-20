import React from 'react';

interface ButtonProps {
    title: string;
}

const Buttonui = ({ title }: ButtonProps) => {
    return (
        <button className="inline-flex h-6 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            {title}
        </button>
    );
};

export default Buttonui;
