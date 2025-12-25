import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ title, icon, children, className = "" }) => {
  return (
    <div className={`relative group mb-16 mx-4 md:mx-auto max-w-4xl ${className}`}>
        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-santa-red rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="text-yellow-400">
                    {icon}
                </div>
                <h2 className="text-3xl font-festive text-yellow-200 tracking-wider">{title}</h2>
            </div>
            <div className="font-body text-lg text-slate-200 leading-relaxed">
                {children}
            </div>
        </div>
    </div>
  );
};

export default Section;