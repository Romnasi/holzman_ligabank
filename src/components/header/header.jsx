import React from 'react';

function Header () {
  return (
    <header className='page-header'>
      <a className='page-header__logo'>
        Логотип
      </a>

      <nav className='page-header__nav nav'>
        <ul>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Рассчитать кредит</a>
          </li>
          <li>
            <a href="#">Конвертер валют</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">Задать вопрос</a>
          </li>
          <li>
            <svg
              width="20"
              height='22'
            >
              <use xlinkHref="#icon-login" />
            </svg>
            <a href="#">Войти в Интернет-банк</a>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
