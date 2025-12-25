import React, { useState, useEffect } from 'react';
import Snowfall from './components/Snowfall';
import Section from './components/Section';
import ParallaxMeme from './components/ParallaxMeme';
import { POEM_TEXT, LETTER_TEXT, PLAYLIST, HEARTFELT_MESSAGE, MEME_DATA } from './constants';
import { Music, Scroll, Heart, Dumbbell, Smile, Gift, Sparkles, Trophy, Star } from 'lucide-react';

// --- Dedicated Banner Component ---
const Banner = () => (
  <div className="bg-white/95 text-santa-red py-2 overflow-hidden border-b-4 border-santa-red shadow-lg relative z-50">
    <div className="animate-marquee whitespace-nowrap font-bold text-sm md:text-base tracking-widest flex items-center gap-8">
      <span>🎅 OFFICIAL SECRET SANTA ARCHIVE FOR KIWI (RAJPUT)</span>
      <span className="text-yellow-500">❄️</span>
      <span>GYM RAT x ENGINEER x RCB FAN</span>
      <span className="text-yellow-500">❄️</span>
      <span>WARNING: CONTAINS HIGH LEVELS OF DELHI SWAG</span>
      <span className="text-yellow-500">❄️</span>
      <span>STAY STRONG BROTHER</span>
      <span className="text-yellow-500">❄️</span>
      <span>🎅 OFFICIAL SECRET SANTA ARCHIVE FOR KIWI (RAJPUT)</span>
    </div>
  </div>
);

// --- Styled Letter Component ---
const VintageLetter = ({ text }: { text: string }) => (
  <div className="relative group perspective-1000 mx-auto max-w-2xl transform transition-transform duration-500 hover:scale-[1.02]">
    <div className="absolute inset-0 bg-gray-800 transform rotate-1 rounded-sm shadow-2xl opacity-40 translate-y-2 translate-x-2"></div>
    <div className="relative bg-[#f4e4bc] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] rotate-[-1deg] paper-texture text-slate-800">
      {/* Tape effect */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm border-l border-r border-white/20"></div>
      
      <div className="font-handwriting text-2xl md:text-3xl leading-relaxed font-bold tracking-wide">
        {text.split('\n').map((line, i) => (
          <p key={i} className="mb-4">{line}</p>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <div className="text-santa-red font-festive text-2xl transform -rotate-12 border-4 border-santa-red p-2 rounded-lg opacity-80">
          Top Secret
        </div>
      </div>
    </div>
  </div>
);

// --- Styled Heartfelt Message Card ---
const GlowingCard = ({ message }: { message: string }) => (
  <div className="relative group mx-auto max-w-3xl">
    <div className="absolute -inset-1 bg-gradient-to-r from-santa-darkRed via-santa-red to-santa-darkRed rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
    <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
      <Heart className="w-12 h-12 text-santa-red mx-auto mb-6 animate-bounce-slow" fill="currentColor" />
      <p className="text-xl md:text-2xl font-body italic text-white leading-loose tracking-wide">
        {message}
      </p>
      <div className="mt-6 flex justify-center gap-2">
         <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
         <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
         <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
      </div>
    </div>
  </div>
);

// --- Christmas Lights (Red & White Only) ---
const ChristmasLights = () => (
  <div className="fixed top-[40px] left-0 w-full flex justify-between px-2 md:px-10 z-40 pointer-events-none overflow-hidden">
     {[...Array(15)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
            <div className="w-0.5 h-6 bg-gray-800/80"></div>
            <div 
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full shadow-[0_0_15px_3px] animate-pulse duration-[2000ms]`}
              style={{
                backgroundColor: i % 2 === 0 ? '#ef4444' : '#ffffff',
                boxShadowColor: i % 2 === 0 ? '#ef4444' : '#ffffff',
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
        </div>
     ))}
  </div>
);

const App: React.FC = () => {
  // Global Mouse Parallax State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinates -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="perspective-container bg-gradient-to-b from-[#4a0404] via-[#7f1d1d] to-[#2b0a0a] min-h-screen text-white relative overflow-x-hidden font-sans">
      <Banner />
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>
      
      <Snowfall />
      <ChristmasLights />

      {/* Global Parallax Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Ornaments reacting to mouse */}
        <div 
          className="absolute top-1/4 left-10 text-yellow-400 opacity-20 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.5)` }}
        >
            <Sparkles className="w-32 h-32" />
        </div>
        <div 
          className="absolute bottom-1/4 right-10 text-santa-snow opacity-10 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px) scale(2)` }}
        >
            <Gift className="w-48 h-48" />
        </div>
        <div 
          className="absolute top-1/3 right-1/4 text-yellow-500 opacity-10 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px) rotate(15deg)` }}
        >
            <Trophy className="w-64 h-64" />
        </div>
      </div>

      {/* Parallax Header Layer */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4" style={{ transformStyle: 'preserve-3d', zIndex: 10 }}>
        
        {/* Deep Glow Behind Santa */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/40 rounded-full blur-[100px] -z-10 mix-blend-screen animate-pulse" style={{ transform: 'translateZ(-2px) scale(1.5)' }}></div>

        {/* Santa Character with Mouse Parallax */}
        <div 
          className="mb-4 relative z-10 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-transform duration-75 ease-out" 
          style={{ transform: `translateZ(20px) translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
        >
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Santa%20Claus.png" 
              alt="Santa Claus" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto animate-bounce-slow"
            />
        </div>
        
        <h1 className="text-5xl md:text-9xl font-festive text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-2 tracking-wide" style={{ transform: 'translateZ(10px)' }}>
          Secret Santa
        </h1>
        <p className="text-2xl md:text-4xl font-festive text-santa-gold drop-shadow-md mb-8">
          For <span className="underline decoration-wavy decoration-white/50">Kiwi (The Rajput)</span>
        </p>
        
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-xl mx-auto shadow-2xl transform hover:scale-105 transition duration-300 hover:rotate-1">
          <p className="text-lg md:text-xl font-body text-gray-100 italic">
            "Bro, forget the Ex. Check what Santa brought you (Spoiler: It's better than an Engineering degree)."
          </p>
        </div>

        <div className="mt-12 animate-bounce flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-yellow-400 font-bold">Unbox Your Roast</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 pb-20 space-y-32 px-4 pt-10">
        
        {/* Heartfelt Message - WITH NEW EFFECT */}
        <Section title="Real Talk from Santa" id="message" icon={<Heart className="w-8 h-8" />}>
           <GlowingCard message={HEARTFELT_MESSAGE} />
        </Section>

        {/* The Letter - WITH NEW EFFECT */}
        <Section title="Confidential Document" id="letter" icon={<Scroll className="w-8 h-8" />}>
           <VintageLetter text={LETTER_TEXT} />
        </Section>

        {/* The Poem */}
        <Section title="The Engineer's Carols" id="poem" icon={<Dumbbell className="w-8 h-8" />}>
          <div className="text-center relative py-12 px-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-500/10 blur-2xl rounded-full animate-pulse"></div>
            <pre className="relative font-festive text-2xl md:text-4xl leading-relaxed whitespace-pre-wrap text-yellow-100 drop-shadow-sm">
              {POEM_TEXT}
            </pre>
          </div>
        </Section>

        {/* Playlist */}
        <Section title="The 'Chatpata' Vibes Playlist" id="playlist" icon={<Music className="w-8 h-8" />}>
          <div className="grid gap-4">
            {PLAYLIST.map((song, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 bg-black/30 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400 group transform hover:translate-x-2">
                <div className="bg-white/10 p-4 rounded-full text-yellow-400 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                  <Music className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl text-white">{song.title} <span className="text-sm font-normal text-gray-400 block md:inline">- {song.artist}</span></h4>
                  <p className="text-gray-300 italic text-sm mt-1">"{song.note}"</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* The New Parallax Meme - SINGLE SCREEN PARALLAX */}
        <Section title="Current Mood: Priorities" id="meme" icon={<Smile className="w-8 h-8" />}>
           <ParallaxMeme data={MEME_DATA} />
        </Section>

      </main>

      <footer className="text-center py-24 text-white/40 relative z-20">
        <div className="flex justify-center items-center gap-2 mb-4 text-yellow-500 opacity-60">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <Sparkles className="w-6 h-6 animate-pulse" />
            <Sparkles className="w-4 h-4 animate-spin-slow" />
        </div>
        <p className="font-festive text-2xl mb-2">Made with ❤️ for Kiwi</p>
        <p className="text-xs font-body tracking-widest uppercase opacity-50">Secret Santa Mission: Accomplished</p>
      </footer>
    </div>
  );
};

export default App;