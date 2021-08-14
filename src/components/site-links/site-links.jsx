import React from 'react';
import {Link} from 'react-router-dom';


function SiteLinks() {
  return(
    <div className='footer__site-links site-links'>
      <ul className='site-links__list'>
        <li className='site-links__item'>
          <Link
            className='site-links__link'
            to="#"
          >
            Услуги
          </Link>
        </li>
        <li className='site-links__item'>
          <Link
            className='site-links__link'
            to="#"
          >
            Рассчитать кредит
          </Link>
        </li>

        <li className='site-links__item'>
          <Link
            className='site-links__link'
            to="#"
          >
            Контакты
          </Link>
        </li>

        <li className='site-links__item'>
          <Link
            className='site-links__link'
            to="#"
          >
            Задать вопрос
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SiteLinks;
