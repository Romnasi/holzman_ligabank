import React from 'react';
import Logo from '../logo/logo';

function LegalAddress() {
  return (
    <section className='footer__legal-address legal-address'>
      <Logo
        block='legal-address'
      />
      <p className='legal-address__text'>
        150015, г. Москва, ул. Московская, д. 32
        Генеральная лицензия Банка России №1050
        Ⓒ Лига Банк, 2019
      </p>
    </section>
  );
}


export default LegalAddress;
