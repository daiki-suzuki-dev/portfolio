import { motion } from 'motion/react';
import { useState } from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

interface TechStack {
  name: string;
  color: string;
  glowColor: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  stacks: TechStack[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.6)',
    stacks: [
      { name: 'React', color: '#61dafb', glowColor: 'rgba(97, 218, 251, 0.6)' },
      { name: 'Next.js', color: '#000000', glowColor: 'rgba(100, 100, 100, 0.6)' },
      { name: 'TypeScript', color: '#3178c6', glowColor: 'rgba(49, 120, 198, 0.6)' },
      { name: 'Tailwind CSS', color: '#06b6d4', glowColor: 'rgba(6, 182, 212, 0.6)' },
      { name: 'Motion', color: '#ff0055', glowColor: 'rgba(255, 0, 85, 0.6)' },
      { name: 'Vue', color: '#764abc', glowColor: 'rgba(118, 74, 188, 0.6)' },
      { name: 'Web3', color: '#89ca78', glowColor: 'rgba(112, 189, 219, 0.6)' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    stacks: [
      { name: 'Node.js', color: '#339933', glowColor: 'rgba(51, 153, 51, 0.6)' },
      { name: 'Express', color: '#000000', glowColor: 'rgba(100, 100, 100, 0.6)' },
      { name: 'GraphQL', color: '#e10098', glowColor: 'rgba(225, 0, 152, 0.6)' },
      { name: 'REST APIs', color: '#ff6b6b', glowColor: 'rgba(255, 107, 107, 0.6)' },
      { name: 'Microservices', color: '#4a5568', glowColor: 'rgba(74, 85, 104, 0.6)' },
    ],
  },
  {
    title: 'Blockchain',
    icon: Server,
    color: '#aadb5a',
    glowColor: 'rgba(59, 224, 72, 0.6)',
    stacks: [
      { name: 'Ethereum', color: '#6eec6e', glowColor: 'rgba(69, 184, 69, 0.6)' },
      { name: 'Smart Contracts', color: '#b69f9f', glowColor: 'rgba(100, 100, 100, 0.6)' },
      { name: 'NFT-Marketplace', color: '#e061b8', glowColor: 'rgba(218, 114, 185, 0.6)' },
      { name: 'Solidity', color: '#ec9898', glowColor: 'rgba(255, 107, 107, 0.6)' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.6)',
    stacks: [
      { name: 'PostgreSQL', color: '#336791', glowColor: 'rgba(51, 103, 145, 0.6)' },
      { name: 'MongoDB', color: '#47a248', glowColor: 'rgba(71, 162, 72, 0.6)' },
      { name: 'Redis', color: '#dc382d', glowColor: 'rgba(220, 56, 45, 0.6)' },
      { name: 'Prisma', color: '#2d3748', glowColor: 'rgba(45, 55, 72, 0.6)' },
      { name: 'MySQL', color: '#4479a1', glowColor: 'rgba(68, 121, 161, 0.6)' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    stacks: [
      { name: 'Docker', color: '#2496ed', glowColor: 'rgba(36, 150, 237, 0.6)' },
      { name: 'AWS', color: '#ff9900', glowColor: 'rgba(255, 153, 0, 0.6)' },
      { name: 'Git', color: '#f05032', glowColor: 'rgba(240, 80, 50, 0.6)' },
      { name: 'CI/CD', color: '#6366f1', glowColor: 'rgba(99, 102, 241, 0.6)' },
      { name: 'Webpack', color: '#8dd6f9', glowColor: 'rgba(141, 214, 249, 0.6)' },
      { name: 'Linux', color: '#fcc624', glowColor: 'rgba(252, 198, 36, 0.6)' },
    ],
  },
];

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-32 px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Tech Stack & Skills
          </h2>
          <p className="text-xl text-gray-600">Technologies I work with to build amazing products</p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${category.color}20`,
                    boxShadow: hoveredCategory === category.title
                      ? `0 0 30px ${category.glowColor}`
                      : 'none',
                  }}
                >
                  <category.icon
                    className="w-6 h-6"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="grid grid-cols-5 md:grid-cols-4 gap-4">
                {category.stacks.map((stack, stackIndex) => (
                  <StackCard
                    key={stack.name}
                    stack={stack}
                    categoryTitle={category.title}
                    hoveredCategory={hoveredCategory}
                    setHoveredCategory={setHoveredCategory}
                    delay={stackIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StackCardProps {
  stack: TechStack;
  categoryTitle: string;
  hoveredCategory: string | null;
  setHoveredCategory: (category: string | null) => void;
  delay: number;
}

function StackCard({ 
  stack, 
  categoryTitle, 
  hoveredCategory, 
  setHoveredCategory,
  delay 
}: StackCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isOtherCategoryHovered = hoveredCategory !== null && hoveredCategory !== categoryTitle;

  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-white border-2 interactive cursor-pointer"
      style={{
        borderColor: isHovered ? stack.color : 'transparent',
        boxShadow: isHovered
          ? `0 0 30px ${stack.glowColor}, 0 0 60px ${stack.glowColor}`
          : '0 4px 6px rgba(0, 0, 0, 0.05)',
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredCategory(categoryTitle);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredCategory(null);
      }}
      animate={{
        y: isOtherCategoryHovered ? 0 : [0, -5, 0],
        opacity: isOtherCategoryHovered ? 0.3 : 1,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        y: {
          duration: 2,
          repeat: isOtherCategoryHovered ? 0 : Infinity,
          ease: 'easeInOut',
        },
        opacity: { duration: 0.3 },
        scale: { duration: 0.2 },
      }}
    >
      {/* Animated background glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl -z-10"
          style={{
            background: `radial-gradient(circle at center, ${stack.glowColor}, transparent)`,
            filter: 'blur(20px)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="text-center">
        <motion.div
          className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: `${stack.color}20`,
          }}
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: stack.color }}
          />
        </motion.div>
        <div className="font-semibold text-gray-800">{stack.name}</div>
      </div>

      {/* Pulse effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-2xl border-2"
          style={{ borderColor: stack.color }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
