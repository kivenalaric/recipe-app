import React from 'react';
import FooterCss from './Footer.module.css';
import FooterImg from '../../Assets/Images/herofood.png';

function Footer() {
  return (
    <div className={FooterCss.footer_main}>
      <div className={FooterCss.left}>
        <img src={FooterImg} alt="grocerry" className={FooterCss.left_pic} />
      </div>
      <div className={FooterCss.rigth}>
        <img src={FooterImg} alt="grocerry" className={FooterCss.left_pic} />
      </div>
    </div>
  );
}

export default Footer;
