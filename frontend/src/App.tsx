import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProfileSnapshot } from './components/ProfileSnapshot';
import { ProjectStories } from './components/ProjectStories';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-base font-sans text-zinc-900 selection:bg-cyan selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProfileSnapshot />
        <ProjectStories />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
