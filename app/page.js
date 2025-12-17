'use client';

import { useState } from 'react';
import LoadingScreen from '@/src/components/LoadingScreen';
import ScrollProgress from '@/src/components/ScrollProgress';
import HeroScene from '@/src/scenes/HeroScene';
import IdentityScene from '@/src/scenes/IdentityScene';
import SkillsScene from '@/src/scenes/SkillsScene';
import ProjectsScene from '@/src/scenes/ProjectsScene';
import CraftScene from '@/src/scenes/CraftScene';
import ExperienceScene from '@/src/scenes/ExperienceScene';
import CTAScene from '@/src/scenes/CTAScene';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative bg-cinema-black min-h-screen">
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          <ScrollProgress />
          <HeroScene />
          <IdentityScene />
          <SkillsScene />
          <ProjectsScene />
          <CraftScene />
          <ExperienceScene />
          <CTAScene />
        </>
      )}
    </main>
  );
}