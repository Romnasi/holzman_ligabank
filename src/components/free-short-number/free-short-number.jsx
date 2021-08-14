import React from 'react';


function FreeShortNumber() {
  return (
    <section className='footer__free-short-number free-short-number'>
      <h2 className='visually-hidden'>
        Бесплатный звонок на короткий номер
      </h2>
      <a
        className='free-short-number__number'
        href='tel:*0904'
      >
        *0904
      </a>
      <p className='free-short-number__desc'>
        Бесплатно для абонентов
        МТС, Билайн, Мегафон, Теле2
      </p>
    </section>
  );
}

export default FreeShortNumber;
