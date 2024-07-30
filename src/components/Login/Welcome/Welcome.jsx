import React from 'react';
import Styles from "./Welcome.module.css";
import { Link } from 'react-router-dom';
import Phone from "../../../assets/login/phone.png";
import Google from "../../../assets/login/google.png";
import Illustrtion from "../../../assets/login/illustration.png";

function Welcome() {
  return (
    <div className={Styles.welcomeContiner}>
      <div className={Styles.imageContainer}>
        <img src={Illustrtion} alt="center image1" />
      </div>
      <div className={Styles.text}>Let’s meeting new <br /> people around you</div>
      <div className={Styles.buttonContainer}>
        <Link href="#" className={Styles.button}><img src={Phone} alt="Phone Icon" /> Login with Phone</Link>
        <Link href="#" className={`${Styles.button} ${Styles.google}`}><img src={Google} alt="Google Icon" /> Login with Google</Link>
      </div>
      <div className={Styles.signUp}>Don't have an account? <Link href="#">Sign Up</Link></div>
    </div>
  )
}

export default Welcome;