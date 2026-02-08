import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  url: string;  
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  link: string;
}

const projects: Project[] = [
  {
    url: 'https://cdn.prod.website-files.com/65455ae3354eb117950e9025/65455ae3354eb117950e9596_DajwnzyTOxPMxLcqOPyws9Yg6IHykmM2YmWfMTqD4M8-aKxmOuXTV7x9GFOAoFftSHnhzTE6oNxhZsefqocMYA0f8BhMIoRehF6bdbdy5ihD_9HW2phJMr7Ms0cmsgHlveT1IOq7hmdIN_DgxmmF3VvBdhKDedl1Z2GSHRIYiBGGrR1XbbUw3KXhvA.png',
    title: 'NFT Marketplace',
    description: 'Gas-efficient NFT marketplace with royalty enforcement and batch minting capabilities.',
    tech: ['Solidity', 'ERC721', 'IPFS', 'The Graph', 'React'],
    gradient: 'from-pink-500 to-blue-500',
    link: 'https://opensea.io/collection/dajwnzytoxpmxlcqopwyss9yg6ihykm2ymwfmtqd4m8',
  },
  {
    url: 'https://cdn.dribbble.com/userupload/7422326/file/original-95ba4a99bb42fded24bd6509b500f55f.jpg?resize=752x&vertical=center',
    title: 'DeFi Lending Protocol',
    description: 'Decentralized lending and borrowing platform with dynamic interest rates and liquidation mechanisms.',
    tech: ['Solidity', 'Hardhat', 'DeFi', 'Compound', 'OpenZeppelin'],
    gradient: 'from-pink-500 to-blue-500',
    link: 'https://compound.finance/',
  },
  {
    url: 'https://miro.medium.com/1%2AQHT9iN37QakWGn0kV3WzzQ.png',
    title: 'Social Media Analytics',
    description: 'Advanced analytics dashboard for social media metrics with real-time data visualization and insights.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'D3.js'],
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://posthog.com/',
  },
  {
    url: 'https://cdn.dribbble.com/userupload/17730953/file/original-05a2f18aae02857f16dc660924a28639.png?resize=1600x1200',
    title: 'Task Management App',
    description: 'Collaborative task management tool with team features, notifications, and project tracking.',
    tech: ['React', 'Express', 'Redis', 'WebSocket'],
    gradient: 'from-pink-500 to-rose-500',
    link: 'https://www.focalboard.com/',
  },
  {
    url: 'https://miro.medium.com/v2/resize%3Afit%3A700/1%2A-VyIgbKmmg8hixKGblnAxg.png',
    title: 'AI Content Generator',
    description: 'AI-powered content generation platform using OpenAI API with custom templates and workflows.',
    tech: ['Next.js', 'OpenAI', 'Prisma', 'TailwindCSS'],
    gradient: 'from-amber-500 to-orange-500',
    link: 'https://platform.openai.com/playground',
  },
  {
    url: 'https://i.insider.com/5e715db2c4854001642b1513?width=700',
    title: 'Real-time Chat Application',
    description: 'Scalable real-time chat with rooms, direct messaging, file sharing, and video calls.',
    tech: ['React', 'Socket.io', 'Node.js', 'WebRTC'],
    gradient: 'from-green-500 to-emerald-500',
    link: 'https://rocket.chat/',
  },
  {
    url: 'https://s3-alpha.figma.com/hub/file/2938151020/414bd57f-5963-4eae-9d6e-9e7f03a518c1-cover.png',
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracker with workout plans, progress tracking, and social features.',
    tech: ['React Native', 'Firebase', 'Redux', 'Charts'],
    gradient: 'from-blue-500 to-indigo-500',
    link: 'https://opentracksapp.com/',
  },
  {
    url: 'https://cdn.dribbble.com/userupload/44637396/file/d5a12d15d75940b88b842e7482e6929e.jpg?resize=400x0',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    gradient: 'from-cyan-500 to-blue-500',
    link: 'https://saleor.io/',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600">Some of my recent work that I'm proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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

  return (
    <motion.div
      ref={cardRef}
      className="relative interactive"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg overflow-hidden border-2 border-transparent">
          {/* Gradient header */}
          <div
            className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}
          />

          {/* Neon overlay on hover */}
          {isHovering && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br opacity-10 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.3))`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* Glow effect */}
          {isHovering && (
            <motion.div
              className="absolute -inset-1 rounded-2xl -z-10"
              style={{
                background: `linear-gradient(135deg, #06b6d4, #a855f7, #ec4899)`,
                filter: 'blur(20px)',
                opacity: 0.6,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
            />
          )}

          <div className="relative z-10">
            <div className="relative aspect-square overflow-hidden">
              <motion.img
                height={100}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={project.url}
                alt={project.url}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-100 to-purple-100 text-gray-700 border border-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a
                href={project.link}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: isHovering ? '0 0 20px rgba(6, 182, 212, 0.5)' : 'none',
                }}
              >
                <ExternalLink className="w-4 h-4" />
                View
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
