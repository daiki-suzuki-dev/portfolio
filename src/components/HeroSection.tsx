import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator', 'Blockchain developer'];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const offsetX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const offsetY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-30"
        style={{
          x: offsetX,
          y: offsetY,
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-30"
        style={{
          x: useTransform(offsetX, (x) => -x),
          y: useTransform(offsetY, (y) => -y),
          background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-20"
        style={{
          x: useTransform(offsetX, (x) => x * 0.5),
          y: useTransform(offsetY, (y) => y * 0.5),
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-20 text-center px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-500" />
          <span className="text-sm text-cyan-600">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          className="text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm Daiki Suzuki
        </motion.h1>

        <div className="h-20 mb-8">
          <motion.h2
            key={currentRole}
            className="text-4xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.6 }}
          >
            {roles[currentRole]}
          </motion.h2>
        </div>

        <motion.p
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting exceptional digital experiences with modern technologies.
          Specialized in building scalable web applications with pixel-perfect design.
        </motion.p>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MagneticButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
            <ArrowRight className="w-5 h-5 ml-2" />
          </MagneticButton>
          <MagneticButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({ 
  children, 
  variant = 'primary',
  onClick 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`
        relative px-8 py-4 rounded-full font-semibold inline-flex items-center overflow-hidden
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
          : 'bg-white border-2 border-purple-500 text-purple-500'
        }
      `}
      style={{
        boxShadow: isHovering 
          ? '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)'
          : '0 0 0 rgba(0, 0, 0, 0)',
      }}
    >
      {children}
      {isHovering && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
}
