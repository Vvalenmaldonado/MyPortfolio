/* eslint-disable @next/next/no-img-element */
import React from 'react';

import style from './Skills.module.css';

export const Skills = () => {
  return (
    <section className={style.skill}>
      <h1>Skills</h1>

      <div className={style.wrapperContainerMargin}>
        <div className={style.info}>
          <div className={style.skillText}>
            <div className={style.text}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                convallis, eros aliquam per sem maecenas blandit primis libero,
                odio pretium nascetur rutrum <br /> bibendum ante potenti.
                Eleifend lacus lectus habitant ridiculus ullamcorper augue{' '}
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                convallis, eros aliquam per sem maecenas blandit primis libero,
                odio pretium nascetur rutrum <br /> bibendum ante potenti.
                Eleifend lacus lectus habitant ridiculus ullamcorper augue{' '}
              </p>
            </div>
          </div>
          <div className={style.boxIcon}>
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
                <img src="images/Skills/gearloading_87549.png" alt="process" />
                <span>In process..</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.boxIcon} ${style.boxIconTools}`}>
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
              <img src="images/Skills/gearloading_87549.png" alt="process" />
              <span>In process..</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
