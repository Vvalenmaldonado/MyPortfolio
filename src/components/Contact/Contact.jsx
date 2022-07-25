/* eslint-disable @next/next/no-img-element */
import emailjs from 'emailjs-com';
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
          <div className={style.imgsT}>
            <img src="images/contact/seed-of-life.png" alt="h" />
            <img
              className={style.second}
              src="images/contact/unicursal-hexagram.png"
              alt="hexagram"
            />

            <img src="images/contact/hexagram.png" alt="h" />
            <div className={style.containerLT}>
              <span>Let's </span>
              <span className={style.talkText}>Talk</span>
            </div>
          </div>
        </div>

        <form className={style.inputs} onSubmit={sendEmail}>
          <div className={style.containerSend}>
            <h3>Send me your message</h3>
            <img src="images/contact/correo-electronico.png" alt="correo" />
          </div>

          <label>Full name</label>
          <input type="text" placeholder="Full name" name="name" />
          <label>Email</label>
          <input
            type="text"
            placeholder="Ej: name.lastname@gmail.com"
            name="user-email"
          />

          <label>Message</label>
          <input
            name="message"
            class="message"
            type="text"
            placeholder="What do you need?"
            style={{ height: '114px' }}
          />
          <button type="submit" value="send">
            <span>SEND</span>
          </button>
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
