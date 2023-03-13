/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import style from './Proyects.module.css';

export const Proyects = () => {
  return (
    <section className={style.proyects}>
      <div className={style.wrapper}>
        <h2>Projects</h2>
        <div className={style.containerCard}>
          <Link
            href="https://www.carbonno.ai/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img
                className={style.Computerimg}
                src="images/proyects/desktopCa.png"
                alt=""
              />
              <img src="images/proyects/MobileCarbonno.png" alt="" />
            </motion.div>
          </Link>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <Link
              href="https://www.carbonno.ai/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={style.CircleText}>
                <h3> Carbonno | Website </h3>
                <p>
                  Freelance. Using Next.js, Framer Motion, SCSS, TypeScript and
                  Vercel.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <Link
            href="https://facumontanaro.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img
                className={style.Computerimg}
                src="images/proyects/FacuDesktop.png"
                alt=""
              />
              <img src="images/proyects/MobileFacuF.png" alt="" />
            </motion.div>
          </Link>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <Link
              href="https://facumontanaro.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={style.CircleText}>
                <h3> Facu Montanaro | Portfolio </h3>
                <p>
                  Freelance. Using Next.js, Sanity.io, Framer Motion, Tailwind,
                  TypeScript and Vercel.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <Link
            href="http://www.lavozdemonte.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img
                classname={style.Computerimg}
                src="images/proyects/lavozdemontepngg.png"
                alt=""
              />

              <img src="images/proyects/lavozdemontemobile.png" alt="" />
            </motion.div>
          </Link>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <Link
              href="http://www.lavozdemonte.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={style.CircleText}>
                <h3>LA VOZ DE MONTE | Digital Diary</h3>
                <p>
                  Freelance. I used figma for the design and React.js, Next.js,
                  Sanity.io and Vercel.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <Link
            href="https://ableton-frontend-practice.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img
                className={style.Computerimg}
                src="images/proyects/abletonN.png"
                alt=""
              />
              <img src="images/proyects/AbletonMobilee.png" alt="" />
            </motion.div>
          </Link>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <Link
              href="https://ableton-frontend-practice.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={style.CircleText}>
                <h3>Ableton | copy</h3>
                <p>Personal practice. Using HTML, CSS and Javascript</p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <Link
            href="https://starbucks-clon.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img
                className={style.Computerimg}
                src="images/proyects/starb.png"
                alt=""
              />
              <img src="images/proyects/Starbucksmobile.png" alt="" />
            </motion.div>
          </Link>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <Link href="https://starbucks-clon.vercel.app/">
              <div className={style.CircleText}>
                <h3>Starbucks | copy</h3>

                <p>Personal practice. Using HTML, CSS and Javascript</p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <Link
            href="https://red-square-clon.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img
                className={style.Computerimg}
                src="images/proyects/redsqueareSSS.png"
                alt=""
              />
              <img
                className={style.hidden}
                src="images/proyects/Starbucksmobile.png"
                alt=""
              />
            </motion.div>
          </Link>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <Link
              href="https://red-square-clon.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={style.CircleText}>
                <h3>Red Square | copy</h3>

                <p>Personal practice. Using HTML, CSS and Javascript</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
