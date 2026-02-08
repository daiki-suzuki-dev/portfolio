import { motion } from 'motion/react';
import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: 'StartupHub',
    role: 'Full-Stack Developer',
    period: '2022 - 2025',
    description: 'Developed and maintained multiple SaaS products from concept to production.',
    achievements: [
      'Built smart contracts to collect payment for decentralized finance protocols, accepting payment in ERC-20 and LP tokens, swapped by a USD stablecoin and sent to the treasury, using on-chain oracles for token pricing. ',
      'Created a token launcher protocol where users can create their ERC-20, ERC-721 (NFT, or ERC-1155 token, with configurable options like fees, burn on transfer, reflection, buyback liquidity, and create a liquidity pool on a DEX. ',
      'Helped architect the internal admin dashboards for deployment and database tracking, which doubled our engineering team’s deployment and unit testing speed. ',
      'Led development of automated reward redemption feature from planning to launch, which improved average usage of a core feature by 50%; wrote the feature PRD and business case; and worked with design, engineering, marketing from conception to release.',
      'Developed and maintained multiple SaaS products from concept to production. ',
      'Built 3 successful MVPs that acquired over 10,000 users.',
      'Implemented a CI/CD pipeline, reducing deployment time by 75%.',
    ],
  },
  {
    company: 'Rakuten',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: 'Focused on building responsive and accessible user interfaces.',
    achievements: [
      'Managed the front-end deliverables and aligned them with design and back-end teams.',
      "Participated in the technical architecture of the company's stack.",
      'Helped in adopting AI tooling and systems like Claude Code to build software. ',
      'Translated requirements and UX designs into functional front-end code accurately. ',
      'Produced clean, well-documented, maintainable, testable, and scalable code. ',
      'Participated in planning, design, architecture, and code review. ',
      'Inspired and mentored junior engineers on best practices and professional conduct.',
    ],
  },
  {
    company: 'Rakuten',
    role: 'Junior Software Developer',
    period: '2019 - 2020',
    description: 'Started career building websites and learning modern web development.',
    achievements: [
      'Started career building websites and learning modern web development. ',
      'Delivered 20 client projects on time and within budget.',
      'Learned Next, Node.js, and modern development practices.',
      'Contributed to open-source projects gaining 500 stars.',
    ],
  },
];

export function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-32 px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-pink-50" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-pink-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">My journey in the tech industry</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          {experiences.map((experience, index) => (
            <motion.div
              key={`company${index}`}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline node */}
              <motion.div
                className="absolute left-8 top-6 w-4 h-4 rounded-full border-4 border-white z-10 interactive"
                style={{
                  backgroundColor: hoveredIndex === index ? '#06b6d4' : '#a855f7',
                  boxShadow: hoveredIndex === index
                    ? '0 0 20px #06b6d4, 0 0 40px #06b6d4'
                    : '0 0 10px #a855f7',
                }}
                animate={{
                  scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Glow pulse when hovered */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute left-8 top-6 w-4 h-4 rounded-full z-5"
                  style={{
                    backgroundColor: '#06b6d4',
                  }}
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              {/* Content card */}
              <div className="ml-24">
                <motion.div
                  className="relative bg-white rounded-2xl p-6 shadow-lg border-2"
                  style={{
                    borderColor: hoveredIndex === index ? '#06b6d4' : 'transparent',
                    boxShadow: hoveredIndex === index
                      ? '0 0 30px rgba(6, 182, 212, 0.3), 0 10px 40px rgba(0, 0, 0, 0.1)'
                      : '0 4px 20px rgba(0, 0, 0, 0.08)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Neon accent on hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-t-2xl"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-600 font-semibold">
                        <Briefcase className="w-4 h-4" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {experience.period}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{experience.description}</p>

                  <div className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{
                            backgroundColor: hoveredIndex === index ? '#06b6d4' : '#a855f7',
                            boxShadow: hoveredIndex === index ? '0 0 10px #06b6d4' : 'none',
                          }}
                        />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
