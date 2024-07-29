import React from 'react';
import Styles from "./Welcome.module.css";
import { Link } from 'react-router-dom';
import DemoImage from "../../../assets/login/image1.jpg";
import Phone from "../../../assets/login/phone.png";
import Google from "../../../assets/login/google.png";

function Welcome() {
  return (
    <div className={Styles.welcomeContiner}>
      <div className={Styles.circleContainer}>
        <div className={`${Styles.circle} ${Styles.circleOuter}`}></div>
        <div className={`${Styles.circle} ${Styles.circleInner}`}></div>
        <div className={`${Styles.circle} ${Styles.circleCenter}`}>
          <img src={DemoImage} alt="center image1" />
        </div>
        <img src={DemoImage} className={Styles.image} alt="image1" />
        <img src={DemoImage} className={Styles.image} alt="image2" />
        <img src={DemoImage} className={Styles.image} alt="image3" />
        <img src={DemoImage} className={Styles.image} alt="image4" />
        <img src={DemoImage} className={Styles.image} alt="image5" />
        <img src={DemoImage} className={Styles.image} alt="image6" />
        <img src={DemoImage} className={Styles.image} alt="image7" />
    </div>
    <div className={Styles.text}>Let’s meeting new <br/> people around you</div>
    <div className={Styles.buttonContainer}>
        <Link href="#" className={Styles.button}><img src={Phone} alt="Phone Icon" /> Login with Phone</Link>
        <Link href="#" className={`${Styles.button} ${Styles.google}`}><img src={Google} alt="Google Icon" /> Login with Google</Link>
    </div>
    <div className={Styles.signUp}>Don't have an account? <Link href="#">Sign Up</Link></div>
    </div>
  )
}

export default Welcome;