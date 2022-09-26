/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import style from './AboutMe.module.css';

export const AboutMe = () => {
  const things = ['GYM', 'VIDEOGAMES', 'DESING', 'ANIMATIONS', 'ANIME'];

  const [thingsIndex, setThingsIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setThingsIndex((index) => (index >= 0 && index < 3 ? index + 1 : 0));
    }, 3000);
  }, []);

  return (
    <section className={style.aboutMe}>
      <h1>About me</h1>
      <div
        className={`${style.wrapperContainer} ${style.wrapperContainerMargin}`}
      >
        <article className={style.article}>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1 }}
            className={style.containerImageW}
          >
            <div className={style.borderG}>
              <div className={style.border}>
                <img src="images/aboutme/yop.png" alt="" />
              </div>
            </div>
          </motion.div>

          <div className={style.description}>
            <h2>Who I am?</h2>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className={style.boxOpacity}
            >
              <p>
                Soy una desarrolladora web que esta en una constante búsqueda de
                aprender y desarrollarme profesionalmente en software,
                orientandome hacia el desarrollo front-end. A medida que fui
                sumergiéndome en el mundo IT estudiando y desarrollando
                proyectos en herramientas como Figma y adobe XD descubrí una
                pasión por el desarrollo pero también por el diseño, por eso en
                cada situación trato que el producto final sea funcional pero
                también tenga un buen criterio de diseño y estética. Me destaco
                por mi personalidad extrovertida sintiendo muy cómoda en grupos
                de trabajo, sin dificultad de comunicación y fácil adaptación.
                Aspiro a formar parte de un equipo de trabajo que me permita
                crecer profesionalmente y me acompañe en desarrollar mis
                habilidades día a día. Actualmente me desempeño como
                desarrollador web de forma autónoma, capacitándome para tener
                todas las herramientas que se requieran para brindar una
                solución acorde a lo que se necesite.
              </p>
            </motion.div>
            <div className={style.whatILike}>
              <img
                src="images/aboutme/heart.png"
                alt="heart"
                width="30"
                height="30"
              />
              <h2>What i like?</h2>
            </div>

            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
            >
              {things[thingsIndex]}
            </motion.span>
          </div>
        </article>
      </div>
    </section>
  );
};
