import React, { useEffect, useRef } from 'react';

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const snowflakes: { x: number; y: number; r: number; d: number }[] = [];
    const maxFlakes = 100;

    for (let i = 0; i < maxFlakes; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 4 + 1,
        d: Math.random() * maxFlakes,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      for (let i = 0; i < maxFlakes; i++) {
        const p = snowflakes[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      move();
    }

    function move() {
      for (let i = 0; i < maxFlakes; i++) {
        const p = snowflakes[i];
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(p.d) * 2;

        if (p.x > width + 5 || p.x < -5 || p.y > height) {
          if (i % 3 > 0) {
            snowflakes[i] = { x: Math.random() * width, y: -10, r: p.r, d: p.d };
          } else {
            if (Math.sin(p.d) > 0) {
              snowflakes[i] = { x: -5, y: Math.random() * height, r: p.r, d: p.d };
            } else {
              snowflakes[i] = { x: width + 5, y: Math.random() * height, r: p.r, d: p.d };
            }
          }
        }
      }
    }

    let animationFrameId: number;
    const render = () => {
      draw();
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default Snowfall;