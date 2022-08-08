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
    
        <li>  <a href='#Home' passHref>HOME</a></li>
      
        <li>  <a href='#AboutMe' passHref>ABOUT </a> </li>
      
        <li>  <a href='#Skills' passHref>SKILLS </a></li>
       
     
        <li><a href='#Proyects' passHref>PROYECTS</a></li>
        
       
        <li> <a href='#Contact' passHref>CONTACT ME   </a></li>
     

      </ul>
 
        <div className={`${styles.navMobile} ${styles.displayNone}`}>
          <NavBurger clicked={clicked} handleClick={handleClick} />
          {clicked ? <ContentNavBurger className={styles.displayNone} handleClick={handleClick} /> : null}
    
         
         
        </div>
      </nav>
     
    </header>
  );
};



