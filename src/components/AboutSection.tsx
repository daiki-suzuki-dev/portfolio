import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

// const DEVELOPER_IMAGE = "https://images.unsplash.com/photo-1599492982656-e7e255be3de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoaXNwYW5pYyUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDA2MzA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function AboutSection() {
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '50+' },
    { icon: Rocket, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Award, label: 'Awards Won', value: '8' },
  ];

  return (
    <section id="about" className="relative py-32 px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-16 items-center mb-20">
          {/* Image with 3D effects//
          <motion.div
            ref={imageRef}
            className="relative interactive"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="relative">
                <img
                  src={DEVELOPER_IMAGE}
                  alt="José González - Full-Stack Developer"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                
                Neon outline on hov//er
                {isHovering && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: '0 0 30px #06b6d4, 0 0 60px #a855f7, inset 0 0 30px rgba(6, 182, 212, 0.2)',
                      border: '2px solid #06b6d4',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                Ripple effect//
                {isHovering && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 2 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                )}

                Glow gradient overlay//
                {isHovering && (
                  <motion.div
                    className="absolute -inset-2 rounded-3xl pointer-events-none -z-10"
                    style={{
                      background: 'linear-gradient(45deg, #06b6d4, #a855f7, #ec4899, #06b6d4)',
                      backgroundSize: '300% 300%',
                      filter: 'blur(20px)',
                      opacity: 0.7,
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}
              </div>
            </motion.div>
          </motion.div> */}

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Passionate Developer, Creative Thinker
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm Daiki Suzuki, a full-stack developer with a passion for creating beautiful, 
              functional, and user-friendly applications. With over 5 years of experience in 
              web development, I specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring 
              that every project not only meets requirements but exceeds expectations. I believe 
              in writing clean, maintainable code and creating experiences that users love.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
              }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-purple-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
              }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
