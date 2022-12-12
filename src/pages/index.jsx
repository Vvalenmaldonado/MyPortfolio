import 'typeface-quicksand';

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
    <div className="containerrr">
      <Head />

      <div className="wrapperHero">
        <HeroB />

        <Header />
        <a id="Home" name="Home">
          <Title />
        </a>
      </div>

      <a id="AboutMe" name="AboutMe">
        <AboutMe />
      </a>
      <a id="Skills" name="Skills">
        <Skills />
      </a>
      <a id="Proyects" name="Proyects">
        <Proyects />
      </a>
      <a id="Contact" name="Contact">
        <Contact />
      </a>
    </div>
  );
};

export default HomePage;
