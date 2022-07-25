/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Link from 'next/link';
import React, { useState } from 'react';

import style from './ContentNavBurger.module.css';

export function ContentNavBurger({ handleClick }) {
  return (
    <div className={`${style.links} ${style.displayNone}`}>
      <ul>
        <li>
          <Link href="/">
            <a onClick={handleClick}>INICIO</a>
          </Link>
        </li>

        <li>
          <Link href="/category/monte" onClick={handleClick}>
            <a onClick={handleClick}>MONTE</a>
          </Link>
        </li>

        <li>
          <Link href="/category/politica" onClick={handleClick}>
            <a onClick={handleClick}>POLITICA</a>
          </Link>
        </li>

        <li>
          <Link href="/category/mercados" onClick={handleClick}>
            <a onClick={handleClick}>MERCADOS</a>
          </Link>
        </li>

        <li>
          <Link href="/category/interes" onClick={handleClick}>
            <a onClick={handleClick}>INTERES</a>
          </Link>
        </li>

        <li>
          <Link href="/category/deportes" onClick={handleClick}>
            <a onClick={handleClick}>DEPORTES</a>
          </Link>
        </li>

        <li>
          <Link href="/category/legales" onClick={handleClick}>
            <a onClick={handleClick}>LEGALES</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
