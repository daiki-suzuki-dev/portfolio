import { motion } from 'motion/react';
import { useState } from 'react';

export function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Daiki Suzuki
        </motion.div>

        <div className="flex gap-8">
          {links.map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link)}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-2 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <span className="relative z-10">{link}</span>
              {hoveredLink === link && (
                <motion.div
                  layoutId="navbar-glow"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))',
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {hoveredLink === link && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  layoutId="navbar-underline"
                  style={{
                    background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
                    boxShadow: '0 0 10px #06b6d4, 0 0 20px #a855f7',
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
