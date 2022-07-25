import React from 'react';

import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Contact } from '@/components/Contact/Contact';
import { Head } from '@/components/Head/Head';
import { Header } from '@/components/Header/Header';
import { HeroB } from '@/components/HeroB/HeroB';
import { Proyects } from '@/components/Proyects/Proyects';
import { Skills } from '@/components/Skills/Skills';
import { Title } from '@/components/Title/Title';

const HomePage = () => {
  return (
    <div>
      <Head />

      <div className="wrapperHero">
        <HeroB />
        <Header />
        <Title />
      </div>

      <AboutMe />
      <Skills />
      <Proyects />
      <Contact />
    </div>
  );
};

export default HomePage;
