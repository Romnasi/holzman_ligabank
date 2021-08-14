import React from 'react';
import {Link} from 'react-router-dom';


function Social() {
  return (
    <section className='footer__social social'>
      <h2 className='visually-hidden'>Мы в социальных сетях</h2>

      <ul className='social__list'>

        <li className='social__item'>
          <Link to="#" className='social__link' title='Мы в Фейсбук'>
            <span className='visually-hidden'>Мы в Фейсбук</span>
            <svg
              width='9'
              height='16'
            >
              <use xlinkHref='#icon-facebook' />
            </svg>
          </Link>
        </li>
        <li className='social__item'>
          <Link to="#" className='social__link' title='Мы в Инстаграм'>
            <span className='visually-hidden'>Мы в Инстаграм</span>
            <svg
              width='16'
              height='16'
            >
              <use xlinkHref='#icon-instagram' />
            </svg>
          </Link>
        </li>

        <li className='social__item'>
          <Link to="#" className='social__link' title='Мы в Твиттер'>
            <span className='visually-hidden'>Мы в Твиттер</span>
            <svg
              width='16'
              height='13'
            >
              <use xlinkHref='#icon-twitter' />
            </svg>
          </Link>
        </li>
        <li className='social__item'>
          <Link to="#" className='social__link' title='Мы на Ютуб'>
            <span className='visually-hidden'>Мы на Ютуб</span>
            <svg
              width='16'
              height='13'
            >
              <use xlinkHref='#icon-youtube' />
            </svg>
          </Link>
        </li>

      </ul>
    </section>
  );
}

export default Social;
