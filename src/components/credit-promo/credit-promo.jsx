import React from 'react';
import {Link} from 'react-router-dom';


function CreditPromo() {
  return (
    <article className='header__credit-promo credit-promo'>
      <div className='credit-promo__wrapper container'>

        <div className='credit-promo__column-wrapper'>
          <h2 className='credit-promo__title'>
            Кредиты на любой случай
          </h2>
          <span className='credit-promo__brand'>
            Лига Банк
          </span>
          <Link
            className='credit-promo__button'
            to='#'
          >
            Рассчитать кредит
          </Link>
        </div>

        <div className='credit-promo__image-wrapper'>
          <picture>
            <source
              type='image/webp'
              srcSet='img/cards@1x.webp 1x, img/cards@2x.webp 2x'
            />
            <img
              src='img/cards@1x.png'
              srcSet='img/cards@2x.png 2x'
              width='444'
              height='286'
              alt='Черный и белый дизайн карты «Лига Банка»'
            />
          </picture>
        </div>

      </div>
    </article>
  );
}

export default CreditPromo;
