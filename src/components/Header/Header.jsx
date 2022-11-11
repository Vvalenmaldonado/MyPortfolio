/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect,useState  } from 'react';

import { ContentNavBurger } from '@/components/ContentNavBurger/ContentNavBurger';
import { NavBurger } from '@/components/NavBurger/NavBurger';

import styles from './Header.module.css';


export const Header = ({data}) => {



  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //Cuando esta true lo pasa a false y viceversa
    setClicked(!clicked);
  };


 


  return (
    <header className={styles.containerHeader} >
      <nav >
      <ul className={styles.navList}>
        <li>  <motion.a    viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }} href='#Home' passHref>HOME</motion.a></li>
        <li>  <motion.a  viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ delay: 0.2 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }} href='#AboutMe' passHref>ABOUT </motion.a> </li>
        <li>  <motion.a viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ delay: 0.4}}
            whileInView={{
              opacity: 1,
              x: 0,
            }}href='#Skills' passHref>SKILLS </motion.a></li>
        <li>  <motion.a viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ delay: 0.6 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }} href='#Proyects' passHref>PROYECTS</motion.a></li>
        <li>  <motion.a viewport={{ once: true }}
            initial={{ opacity: 0, x: 60 }}
            transition={{ delay: 0.8 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }} href='#Contact' passHref>CONTACT ME   </motion.a></li>
      </ul>
 
       
      </nav>
      {/* <div className={`${styles.navMobile}`}>
          <NavBurger clicked={clicked} handleClick={handleClick} />
          {clicked ? <ContentNavBurger className={styles.displayNone} handleClick={handleClick} /> : null}
  
        </div> */}
    </header>
  );
};



