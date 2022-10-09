/* eslint-disable import/no-named-as-default-member */
/* eslint-disable @next/next/no-img-element */
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import style from './Contact.module.css';

export const Contact = () => {
  /*Form validation */
  const initialValues = { fullName: '', message: '', userEmail: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /*Form validation 2 */
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = 'Full name is required';
    }
    if (!values.userEmail) {
      errors.userEmail = 'Email is required';
    } else if (!regex.test(values.userEmail)) {
      errors.userEmail = 'This is not a valid email format!';
    }
    if (!values.message) {
      errors.message = 'Message is required';
    } else if (values.message > 200) {
      errors.message = 'Message cannot exceed more than 200 characters';
    }
    return errors;
  };

  /*send email form */
  function sendEmail(e) {
    e.preventDefault();

    setFormErrors(validate(formValues));
    console.log(formErrors, 'HOLA');
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const emailJS = emailjs
        .sendForm(
          'service_l8y7bmk',
          'template_baf0n8v',
          e.target,
          'tyfdjcsH2ExI7pkBi'
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      return emailJS;
    }
    setIsSubmit(true);
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
          <span>{formErrors.fullName}</span>

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
          <span>{formErrors.userEmail}</span>

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
          <span>{formErrors.message}</span>
          <motion.button
            viewport={{ amount: 0.8, once: true }}
            initial={{ opacity: 0, y: 5 }}
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
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <span className={style.sendSucceful}>Enviado!</span>
          ) : (
            ''
          )}
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
