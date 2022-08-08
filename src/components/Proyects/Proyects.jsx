/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import style from './Proyects.module.css';

export const Proyects = () => {
  return (
    <section className={style.proyects}>
      <div className={style.wrapper}>
        <h1>Proyects</h1>
        <div className={style.containerCard}>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circle}
          >
            <a href="http://www.lavozdemonte.com" passHref>
              <img src="images/proyects/lavozdemontepngg.png" alt="" />
            </a>
            <a href="http://www.lavozdemonte.com" passHref>
              <img src="images/proyects/lavozdemontemobile.png" alt="" />
            </a>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <div className={style.solapa}>
              <ul>
                <li>
                  <img src="images/Skills/html.png" alt="html" />
                </li>
                <li>
                  <img src="images/Skills/css.png" alt="css" />
                </li>
                <li>
                  <img src="images/Skills/javascript.png" alt="Javascript" />
                </li>
              </ul>
            </div>
            <Link href="http://www.lavozdemonte.com" passHref>
              <div className={style.CircleText}>
                <h3>
                  LA VOZ DE MONTE
                  <br /> diario digital
                </h3>
                <p>
                  Trabajo freelance. Utilice Figma para el diseno y la
                  desarrolle con React.js, Next.js y Sanity.io
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <Link href="https://ableton-frontend-practice.vercel.app/" passHref>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img src="images/proyects/abletonN.png" alt="" />
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
            <div className={style.solapa}>
              <ul>
                <li>
                  <img src="images/Skills/html.png" alt="html" />
                </li>
                <li>
                  <img src="images/Skills/css.png" alt="css" />
                </li>
                <li>
                  <img src="images/Skills/javascript.png" alt="Javascript" />
                </li>
              </ul>
            </div>
            <Link href="https://ableton-frontend-practice.vercel.app/" passHref>
              <div className={style.CircleText}>
                <h3>Ableton | copy</h3>
                <p>Practica personal. Utilizando HTML, CSS y Javascript</p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <Link href="https://starbucks-clon.vercel.app/" passHref>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className={style.circle}
            >
              <img src="images/proyects/starb.png" alt="" />
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
            <div className={style.solapa}>
              <ul>
                <li>
                  <img src="images/Skills/html.png" alt="html" />
                </li>
                <li>
                  <img src="images/Skills/css.png" alt="css" />
                </li>
                <li>
                  <img src="images/Skills/javascript.png" alt="Javascript" />
                </li>
              </ul>
            </div>
            <Link href="https://starbucks-clon.vercel.app/" passHref>
              <div className={style.CircleText}>
                <h3>Starbucks | copy</h3>

                <p>Practica personal. Utilizando HTML, CSS y Javascript</p>
              </div>
            </Link>
          </motion.div>
        </div>
        <div className={style.containerCard}>
          <div className={style.circle}>
            <Link
              href="https://red-square-clon-bg4vz9cvf-vvalenmaldonado.vercel.app/"
              passHref
            >
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                className={style.redS}
                src="images/proyects/redsqueareSSS.png"
                alt=""
              />
            </Link>
          </div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className={style.circleInfo}
          >
            <div className={style.solapa}>
              <ul>
                <li>
                  <img src="images/Skills/html.png" alt="html" />
                </li>
                <li>
                  <img src="images/Skills/css.png" alt="css" />
                </li>
                <li>
                  <img src="images/Skills/javascript.png" alt="Javascript" />
                </li>
              </ul>
            </div>
            <Link
              href="https://red-square-clon-bg4vz9cvf-vvalenmaldonado.vercel.app/"
              passHref
            >
              <div className={style.CircleText}>
                <h3>Red Square | copy</h3>
                <p>Practica personal. Utilizando HTML, CSS y Javascript</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
