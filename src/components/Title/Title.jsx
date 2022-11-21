import { motion } from 'framer-motion';
import React from 'react';

import style from './Title.module.css';

export const Title = () => {
  return (
    <div className={style.Title}>
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ delay: 1 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        Hi welcome to my website
      </motion.h1>
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ delay: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className={style.name}
      >
        I'm Valentina Maldonado
      </motion.h1>
      <motion.h1
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ delay: 1.4 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        FRONT-END Developer Jr
      </motion.h1>
    </div>
  );
};
