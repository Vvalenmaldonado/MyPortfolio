import React from 'react';

import style from './NavBurger.module.css';

export function NavBurger(props) {
  return (
    <button
      onClick={props.handleClick}
      className={`${style.navIcon5} ${style.displayNone} ${
        props.clicked ? style.open : ''
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
