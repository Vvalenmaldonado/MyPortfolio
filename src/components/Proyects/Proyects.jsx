/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react';

import style from './Proyects.module.css';

export const Proyects = () => {
  return (
    <section className={style.proyects}>
      <div className={style.wrapper}>
        <h1>Proyects</h1>
        <div className={style.containerCard}>
          <div className={style.circle}>
            <Link href="http://www.lavozdemonte.com" passHref>
              <img src="images/proyects/lavozdemontepngg.png" alt="" />
            </Link>
            <Link href="http://www.lavozdemonte.com" passHref>
              <img src="images/proyects/lavozdemontemobile.png" alt="" />
            </Link>
          </div>

          <div className={style.circleInfo}>
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
          </div>
        </div>
        <div className={style.containerCard}>
          <Link href="https://ableton-frontend-practice.vercel.app/" passHref>
            <div className={style.circle}>
              <img src="images/proyects/abletonN.png" alt="" />
              <img src="images/proyects/AbletonMobilee.png" alt="" />
            </div>
          </Link>

          <div className={style.circleInfo}>
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
          </div>
        </div>
        <div className={style.containerCard}>
          <div className={style.circle}>
            <Link
              href="https://red-square-clon-bg4vz9cvf-vvalenmaldonado.vercel.app/"
              passHref
            >
              <img
                className={style.redS}
                src="images/proyects/redsqueareSSS.png"
                alt=""
              />
            </Link>
          </div>
          <div className={style.circleInfo}>
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
                <p>
                  <p>Practica personal. Utilizando HTML, CSS y Javascript</p>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={style.containerCard}>
          <Link href="https://starbucks-clon.vercel.app/" passHref>
            <div className={style.circle}>
              <img src="images/proyects/starb.png" alt="" />
              <img src="images/proyects/Starbucksmobile.png" alt="" />
            </div>
          </Link>

          <div className={style.circleInfo}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
