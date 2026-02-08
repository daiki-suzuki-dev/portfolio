import { Toaster } from 'sonner@2.0.3';
import { CustomCursor } from './components/CustomCursor';
import { MouseGlow } from './components/MouseGlow';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden cursor-none">
      {/* Custom cursor and mouse effects */}
      <CustomCursor />
      <MouseGlow />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative py-12 px-8 bg-gradient-to-br from-gray-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Daiki Suzuki
          </h3>
          <p className="text-gray-400 mb-4">Full-Stack Developer & Creative Problem Solver</p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Daiki Suzuki. Built with React, TypeScript, and Motion.
          </p>
        </div>
      </footer>
      
      {/* Toast notifications */}
      <Toaster position="top-right" />
    </div>
  );
}
