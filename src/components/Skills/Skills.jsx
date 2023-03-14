/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import Image from 'next/image';
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
                During my learning process as a front-end developer, I used the
                Udemy platform and Youtube to consume courses that teach me all
                the tools and technologies necessary to create websites.
              </p>
            </div>
          </div>
          <motion.div
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
                />
                <span>ReactJS</span>
              </li>
            </ul>
            <ul>
              <li>
                <Image
                  src="/images/Skills/responsive-design.png"
                  alt="responsiveWeb"
                  height="100"
                  width="100"
                />
                <span>
                  Responsive
                  <br /> web
                </span>
              </li>
              <li>
                <svg
                  width="81"
                  height="50"
                  viewBox="0 0 76 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                </svg>
                <span>Vercel</span>
              </li>
              <li>
                <Image
                  src="/images/Skills/framer.png"
                  alt="framer motion"
                  height="100"
                  width="100"
                />
                <span>Framer Motion</span>
              </li>
              <li>
                <Image
                  src="/images/Skills/sass.png"
                  alt="sass"
                  height="100"
                  width="100"
                />
                <span>Sass</span>
              </li>
            </ul>
            <ul>
              <li>
                <svg
                  width="50"
                  fill="white"
                  viewBox="0 0 50 46"
                  class="text-slate-900 dark:text-white w-auto h-5"
                >
                  <path
                    fill="white"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                  ></path>
                </svg>
                <span>Tailwind</span>
              </li>

              <li>
                <Image
                  src="/images/Skills/nextjs.png"
                  alt="NextJs"
                  width="100"
                  height="100"
                />
                <span>NextJS</span>
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
                  className={style.progress}
                />
                <span>...</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
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
              <Image
                src="/images/Skills/figma.png"
                alt="figma"
                width="100"
                height="100"
              />
              <span>Figma</span>
            </li>
            <li>
              <Image
                src="/images/Skills/experience.png"
                alt="Adobe xd"
                width="100"
                height="100"
              />
              <span>Adobe Xd</span>
            </li>
            <li>
              <Image
                src="/images/Skills/photoshop.png"
                alt="Photoshop"
                width="100"
                height="100"
              />
              <span>photoshop</span>
            </li>
            <li>
              <Image
                src="/images/Skills/github.png"
                alt="github"
                width="100"
                height="100"
              />
              <span>Github</span>
            </li>
          </ul>
          <ul>
            <li>
              <Image
                src="/images/Skills/visual-studio.png"
                alt="visual studio code"
                width="100"
                height="100"
              />
              <span>VSC</span>
            </li>
            <li>
              <Image
                src="/images/Skills/9374299221540553610-512.png"
                alt="git"
                width="100"
                height="100"
              />
              <span>Git</span>
            </li>
            <li>
              <Image
                src="/images/Skills/cms.png"
                alt="CMS"
                width="100"
                height="100"
              />
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
                className={style.progress}
              />
              <span>...</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
