/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import style from './AboutMe.module.css';

export const AboutMe = () => {
  const things = ['GYM', 'VIDEOGAMES', 'DESIGN', 'ANIMATIONS', 'ANIME'];
  const intervalRef = useRef(null);

  const [thingsIndex, setThingsIndex] = useState(0);

  useEffect(() => {
    if (intervalRef.current === null) {
      intervalRef = setInterval(() => {
        setThingsIndex((index) => (index >= 0 && index < 3 ? index + 1 : 0));
      }, 2500);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className={style.aboutMe}>
      <h2>About me</h2>
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
            transition={{ duration: 0.5 }}
            className={style.containerImageW}
          >
            <div className={style.borderG}>
              <div className={style.border}>
                <img src="images/aboutme/yop.png" alt="" />
              </div>
            </div>
          </motion.div>

          <div className={style.description}>
            <h3>Who I am?</h3>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.5 }}
              className={style.boxOpacity}
            >
              <p>
                I am a web developer who is in a constant search to learn and
                develop professionally in software, focused on front-end
                development. I stand out for my outgoing personality, feeling
                very comfortable in work groups, without communication
                difficulties and easy to adapt. I aspire to be part of a work
                team that allows me to grow professionally and guides me in the
                development of my skills day by day. I currently work as a web
                developer independently, training myself to have all the tools
                that are required to provide a solution according to what is
                needed.
              </p>
            </motion.div>
            <div className={style.whatILike}>
              <img
                src="images/aboutme/heart.png"
                alt="heart"
                width="30"
                height="30"
              />
              <h3>What i like?</h3>
            </div>

            <span>{things[thingsIndex]}</span>
          </div>
        </article>
      </div>
    </section>
  );
};
