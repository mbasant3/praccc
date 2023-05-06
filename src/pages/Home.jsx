import React from 'react';
import "./page.css";
import MyGallery from './ImageSlider';
import Own from "./Image/own.png";

export default function Home() {

  return (
    <>
      <MyGallery/>
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hey, I AM</span>
            <span>Pradeepkumar Prajapati</span>
            <span>Frontend Devloper with some experience in web designing and developement, producting the Quality work</span>
          </div>
          <a href='./about'><button className="button i-button">About-Us</button></a>
        </div>
        <div className="i-right">
          <img src={Own}
          alt='' className='about_img'/>
        </div>
      </div>
    </div>
    </>
  )
}
