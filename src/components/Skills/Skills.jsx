/* eslint-disable @next/next/no-img-element */
import { Loop } from '@mui/icons-material';
import { motion } from 'framer-motion';
import React from 'react';

import style from './Skills.module.css';
export const Skills = () => {
  return (
    <section className={style.skill}>
      <h2>Skills</h2>

      <div className={style.wrapperContainerMargin}>
        <div className={style.info}>
          <div className={style.skillText}>
            <div className={style.text}>
              <p>
                Durante mi proceso de aprendizaje como desarrolladora front-end,
                utilice la plataforma Udemy y Youtube para consumir cursos que
                me enseñen todas las herramientas y technologias necesarias para
                la creacion de sitios web.
              </p>
            </div>
          </div>
          {/* <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ damping: 150, stiffness: 500, type: 'spring' }}
            className={style.boxIcon}
          >
            <h3>Technologies</h3>
            <ul>
              <li>
                <img src="images/Skills/html.png" alt="html" />
                <span>HTML</span>
              </li>
              <li>
                <img src="images/Skills/css.png" alt="css" />
                <span>CSS</span>
              </li>
              <li>
                <img src="images/Skills/javascript.png" alt="javascript" />
                <span>Javascript</span>
              </li>
              <li className={style.reactI}>
                <img
                  src="images\Skills\react_button_icon_151947.png"
                  alt="reactJs"
                  height=""
                  width="100"
                />
                <span>ReactJS</span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  src="images/Skills/responsive-design.png"
                  alt="responsiveWeb"
                />
                <span>
                  Responsive
                  <br /> web
                </span>
              </li>

              <li>
                <img src="images/Skills/nextjs.png" alt="NextJs" />
                <span>NextJs</span>
              </li>

              <li>
                <motion.img
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  src="images/Skills/gearloading_87549.png"
                  alt="process"
                />
                <span>In process..</span>
              </li>
            </ul>
          </motion.div> */}
        </div>
        {/* <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ damping: 150, stiffness: 500, type: 'spring' }}
          className={`${style.boxIcon} ${style.boxIconTools}`}
        >
          <h3>Tools</h3>
          <ul>
            <li>
              <img src="images/Skills/figma.png" alt="html" />
              <span>Figma</span>
            </li>
            <li>
              <img src="images/Skills/experience.png" alt="css" />
              <span>Adobe Xd</span>
            </li>
            <li>
              <img src="images/Skills/photoshop.png" alt="javascript" />
              <span>photoshop</span>
            </li>
            <li>
              <img src="images/Skills/github.png" alt="responsiveWeb" />
              <span>Github</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src="images/Skills/visual-studio.png" alt="git" />
              <span>VSC</span>
            </li>
            <li>
              <img src="images/Skills/9374299221540553610-512.png" alt="git" />
              <span>Git</span>
            </li>
            <li>
              <img src="images/Skills/cms.png" alt="CMS" />
              <span>CMS</span>
            </li>
            <li>
              <motion.img
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                src="images/Skills/gearloading_87549.png"
                alt="process"
              />
              <span>In process..</span>
            </li>
          </ul>
        </motion.div> */}
      </div>
    </section>
  );
};
