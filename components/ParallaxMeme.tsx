import React, { useRef, useState } from 'react';
import { MemeConfig } from '../types';

interface Props {
  data: MemeConfig;
}

const ParallaxMeme: React.FC<Props> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation based on mouse position relative to center
    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Reset to center on leave
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="w-full max-w-lg mx-auto aspect-square p-4" style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full relative transition-transform duration-200 ease-out preserve-3d cursor-pointer"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background Layer (Image) */}
        <div 
            className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-[10px] border-white"
            style={{ transform: 'translateZ(0px)' }}
        >
             <img 
                src={`https://picsum.photos/seed/${data.imageKeyword}/800/800`} 
                alt="Meme Background" 
                className="w-full h-full object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Middle Layer (Decorative Elements) */}
        <div 
            className="absolute inset-0 rounded-xl border-4 border-white/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ transform: 'translateZ(30px)' }}
        ></div>

        {/* Foreground Layer (Text) */}
        <div 
            className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none"
            style={{ transform: 'translateZ(60px)' }}
        >
            <div className="text-center transform transition-transform duration-200">
                <span className="text-3xl md:text-4xl font-black text-white stroke-black drop-shadow-xl font-sans tracking-tighter leading-tight block" style={{ textShadow: '3px 3px 0 #000' }}>
                  {data.topText}
                </span>
            </div>
            
            <div className="text-center transform transition-transform duration-200">
                <span className="text-3xl md:text-4xl font-black text-white stroke-black drop-shadow-xl font-sans tracking-tighter leading-tight block" style={{ textShadow: '3px 3px 0 #000' }}>
                  {data.bottomText}
                </span>
            </div>
        </div>

        {/* Shine Effect */}
        <div 
            className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"
            style={{ transform: 'translateZ(80px)' }}
        ></div>
      </div>
      <p className="text-center mt-8 text-yellow-400 font-bold tracking-widest uppercase text-sm animate-pulse">
         Hover to feel the depth of pain
      </p>
    </div>
  );
};

export default ParallaxMeme;