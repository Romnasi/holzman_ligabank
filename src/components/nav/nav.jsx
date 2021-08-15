import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
  return (
    <nav className='main-menu__nav nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link to="#" className='nav__link'>Услуги</Link>
        </li>
        <li className='nav__item'>
          <Link to="#" className='nav__link'>Рассчитать кредит</Link>
        </li>
        <li className='nav__item nav__item--active'>
          <Link to="#" className='nav__link'>Конвертер валют</Link>
        </li>
        <li className='nav__item'>
          <Link to="#" className='nav__link'>Контакты</Link>
        </li>
        <li className='nav__item'>
          <Link to="#" className='nav__link'>Задать вопрос</Link>
        </li>
        <li className='nav__item nav__item--login'>
          <Link to="#" className='nav__link nav__link--login'>
            <svg
              className='nav__icon nav__icon--login'
              width='20'
              height='22'
            >
              <use xlinkHref='#icon-login' />
            </svg>
            Войти в Интернет-банк
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
