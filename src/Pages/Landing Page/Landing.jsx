/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import HeroFood from '../../Assets/Images/herofood.png';
// import Logo from '../../Assets/Images/logo.png';
import LandingCss from './Landing.module.css';

function Landing() {
  return (
    <div className={LandingCss.main}>
      <div className={LandingCss.main__sec}>
        <div className={LandingCss.navbar__section}>
          <div className={LandingCss.navbar__left}>
            <span>
              <i className="fa-regular fa-plate-utensils" />
            </span>
            <h2>A's Recipe</h2>
          </div>
          <div className={LandingCss.navbar__right}>
            <ul className={LandingCss.navbar_ul}>
              <li className={LandingCss.navbar__link}>Home</li>
              <li className={LandingCss.navbar__link}>Recipies</li>
              <li className={LandingCss.navbar__link}>About</li>
            </ul>
          </div>
        </div>
        <div className={LandingCss.hero__main}>
          <div className={LandingCss.hero__left}>
            <h1>Neva hunga!!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              reprehenderit cum alias et modi debitis suscipit sunt nisi,
              adipisci distinctio quibusdam commodi aspernatur rerum minus
              nostrum. Delectus ad voluptatum quidem?
            </p>
          </div>
          <div className={LandingCss.hero__right}>
            <img
              src={HeroFood}
              alt="grocerry"
              className={LandingCss.hero_pic}
            />
          </div>
        </div>
        <div className={LandingCss.mid}>
          <div className={LandingCss.mid_head}>
            <h2>Our recipies</h2>
          </div>
          <div className={LandingCss.add_sec}>
            <button type="button" className={LandingCss.add_btn}>
              Add Your's <span className={LandingCss.add_span}>+</span>
            </button>
          </div>
        </div>
        <div className={LandingCss.foodCart}>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Landing;
