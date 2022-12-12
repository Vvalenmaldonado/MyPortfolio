/* eslint-disable import/no-named-as-default-member */
/* eslint-disable @next/next/no-img-element */

import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import style from './Contact.module.css';

export const Contact = () => {
  /*Form validation */
  const initialValues = { fullName: '', message: '', userEmail: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /*Form validation 2 */
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues, 'holaaa');
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = ' - is required';
    }
    if (!values.userEmail) {
      errors.userEmail = ' - is required';
    } else if (!regex.test(values.userEmail)) {
      errors.userEmail = 'This is not a valid email format!';
    }
    if (!values.message) {
      errors.message = ' - is required';
    } else if (values.message > 200) {
      errors.message = 'Message cannot exceed more than 200 characters';
    }
    return errors;
  };

  /*send email form */
  function sendEmail(e) {
    e.preventDefault();

    const errors = validate(formValues);

    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      return;
    }

    emailjs
      .sendForm(
        'service_l8y7bmk',
        'template_baf0n8v',
        e.target,
        'tyfdjcsH2ExI7pkBi'
      )
      .then((res) => setEmailSent(true))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <section className={style.contact}>
        <div className={style.talk}>
          <h2>Contact</h2>
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
          <div className={style.containerForm}>
            <div className={style.containerLabel}>
              <motion.label
                viewport={{ amount: 0.8, once: true }}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
              >
                Full name
              </motion.label>
              <span>{formErrors.fullName}</span>
            </div>
            <motion.input
              viewport={{ amount: 0.8, once: true }}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              type="text"
              placeholder="Full name"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
            />
            <div className={style.containerLabel}>
              <motion.label
                viewport={{ amount: 0.8, once: true }}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.2 }}
              >
                Email
              </motion.label>
              <span>{formErrors.userEmail}</span>
            </div>
            <motion.input
              viewport={{ amount: 0.8, once: true }}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.2 }}
              type="text"
              placeholder="Ej: name.lastname@gmail.com"
              name="userEmail"
              value={formValues.userEmail}
              onChange={handleChange}
            />
            <div className={style.containerLabel}>
              <motion.label
                viewport={{ amount: 0.8, once: true }}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: 0.4 }}
              >
                Message
              </motion.label>
              <span>{formErrors.message}</span>
            </div>
            <motion.input
              viewport={{ amount: 0.8, once: true }}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.4 }}
              name="message"
              type="text"
              placeholder="What do you need?"
              style={{ height: '114px' }}
              value={formValues.message}
              onChange={handleChange}
            />

            <motion.button
              viewport={{ amount: 0.8, once: true }}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.6 }}
              type="submit"
            >
              <span>SEND</span>
            </motion.button>
            {emailSent ? (
              <span className={style.sendSucceful}>Enviado!</span>
            ) : (
              ''
            )}
          </div>
        </form>
      </section>
      <div className={style.iconss}>
        <span className={style.findMe}>Find me on these online space too!</span>
        <div className={style.contactIcons}>
          <ul>
            <li>
              <Link href="https://www.github.com/vvalenmaldonado" passHref>
                <img src="images/contact/github.png" alt="github" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/valentina-maldonado-b41a37231/"
                passHref
              >
                <img src="images/contact/linkedin.png" alt="linkedin" />
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/vvalenmaldonado" passHref>
                <img src="images/contact/Twitter.png" alt="Twitter" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
