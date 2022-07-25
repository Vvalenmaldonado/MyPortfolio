/* eslint-disable prettier/prettier */

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
      <nav>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>PROYECTS</li>
        <li>CONTACT ME</li>

      </ul>
 
        <div className={`${styles.navMobile} ${styles.displayNone}`}>
          <NavBurger clicked={clicked} handleClick={handleClick} />
          {clicked ? <ContentNavBurger className={styles.displayNone} handleClick={handleClick} /> : null}
    
         
         
        </div>
      </nav>
     
    </header>
  );
};



