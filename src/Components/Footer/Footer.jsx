/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineFoodBank } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import FooterCss from './Footer.module.css';
import FooterImg from '../../Assets/Images/herofood.png';

function Footer() {
  return (
    <div className={FooterCss.footer_main}>
      <div className={FooterCss.left}>
        <img src={FooterImg} alt="grocerry" className={FooterCss.left_pic} />
      </div>
      <div className={FooterCss.middle}>
        <MdOutlineFoodBank className={FooterCss.icons} />
        <FaFacebookSquare className={FooterCss.icons} />
        <AiFillInstagram className={FooterCss.icons} />
        <FaTwitter className={FooterCss.icons} />
      </div>
      <div className={FooterCss.rigth}>
        <a href="">Contact</a>
        <a href="">Help</a>
        <a href="">About</a>
        <a href="">QAF</a>
      </div>
    </div>
  );
}

export default Footer;
