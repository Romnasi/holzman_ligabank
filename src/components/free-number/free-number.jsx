import React from 'react';

function FreeNumber() {
  return (
    <section className='footer__free-number free-number'>
      <h2 className='visually-hidden'>
        Бесплатный звонок по России
      </h2>
      <a
        href='tel:+78001112233'
        className='free-number__number'
      >
        8 800 111 22 33
      </a>
      <p className="free-number__desc">
        Бесплатный для всех
        городов России
      </p>
    </section>
  );
}

export default FreeNumber;
