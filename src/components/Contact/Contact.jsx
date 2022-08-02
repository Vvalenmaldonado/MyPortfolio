/* eslint-disable @next/next/no-img-element */
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import React from 'react';

import style from './Contact.module.css';

export const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_l8y7bmk',
        'template_baf0n8v',
        e.target,
        'tyfdjcsH2ExI7pkBi'
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <section className={style.contact}>
        <div className={style.talk}>
          <h1>Contact</h1>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            className={style.imgsT}
          >
            <motion.img
              animate={{ y: 50 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              src="images/contact/seed-of-life.png"
              alt="h"
            />
            <motion.img
              animate={{ y: -30 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className={style.second}
              src="images/contact/unicursal-hexagram.png"
              alt="hexagram"
            />

            <motion.img
              animate={{ x: -40 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              src="images/contact/hexagram.png"
              alt="h"
            />
            <div className={style.containerLT}>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ delay: 0.5 }}
              >
                Let's
              </motion.span>
              <motion.span
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ delay: 0.5 }}
                className={style.talkText}
              >
                Talk
              </motion.span>
            </div>
          </motion.div>
        </div>

        <form className={style.inputs} onSubmit={sendEmail}>
          <div className={style.containerSend}>
            <h3>Send me your message</h3>
            <img src="images/contact/correo-electronico.png" alt="correo" />
          </div>

          <motion.label
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
          >
            Full name
          </motion.label>
          <motion.input
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            type="text"
            placeholder="Full name"
            name="name"
          />
          <motion.label
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.2 }}
          >
            Email
          </motion.label>
          <motion.input
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.2 }}
            type="text"
            placeholder="Ej: name.lastname@gmail.com"
            name="user-email"
          />

          <motion.label
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.4 }}
          >
            Message
          </motion.label>
          <motion.input
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.4 }}
            name="message"
            class="message"
            type="text"
            placeholder="What do you need?"
            style={{ height: '114px' }}
          />
          <motion.button
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -60 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ delay: 0.6 }}
            type="submit"
            value="send"
          >
            <span>SEND</span>
          </motion.button>
        </form>
      </section>
      <div className={style.iconss}>
        <span className={style.findMe}>Find me on these online space too!</span>
        <div className={style.contactIcons}>
          <ul>
            <li>
              <img src="images/contact/github.png" alt="github" />
            </li>
            <li>
              <img src="images/contact/linkedin.png" alt="linkedin" />
            </li>
            <li>
              <img src="images/contact/instagram.png" alt="instagram" />
            </li>
            <li>
              <img src="images/contact/Twitter.png" alt="Twitter" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
