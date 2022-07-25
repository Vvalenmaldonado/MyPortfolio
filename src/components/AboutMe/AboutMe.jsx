/* eslint-disable @next/next/no-img-element */
import React from 'react';

import style from './AboutMe.module.css';

export const AboutMe = () => {
  return (
    <section className={style.aboutMe}>
      <h1>About me</h1>
      <div
        className={`${style.wrapperContainer} ${style.wrapperContainerMargin}`}
      >
        <article className={style.article}>
          <div className={style.containerImageW}>
            <div className={style.borderG}>
              <div className={style.border}>
                <img src="images/aboutme/yop.png" alt="" />
              </div>
            </div>
          </div>

          <div className={style.description}>
            <h2>Who I am?</h2>
            <div className={style.boxOpacity}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                convallis, eros aliquam per sem maecenas blandit primis libero,
                odio pretium nascetur rutrum bibendum ante potenti. <br /> Lorem
                ipsum dolor sit amet consectetur adipiscing elit convallis, eros
                aliquam per sem maecenas blandit primis libero, odio pretium
                nascetur rutrum bibendum ante potenti. <br />
                Lorem ipsum dolor sit amet consectetur adipiscing elit
                convallis, eros aliquam per sem maecenas blandit primis libero,
                odio pretium nascetur rutrum bibendum ante potenti.
              </p>
            </div>
            <div className={style.whatILike}>
              <img
                src="images/aboutme/heart.png"
                alt="heart"
                width="30"
                height="30"
              />
              <h2>What i like?</h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
