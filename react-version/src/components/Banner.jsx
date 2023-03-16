import "../styles/Banner.css"
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from "react";
import { bannerData } from '../data'
import SocialIcon from "./SocialIcon";

const Banner = () => {
    useEffect(() =>{
        new Typewriter('.txt-rotate', {
            strings: bannerData.typeWriterText,
            autoStart: true,
            loop:true,
        });
    },[])


  return (
      <div className="section banner" style={{
          background: `rgb(141, 140, 140) url('${process.env.PUBLIC_URL}/assets/img/banner.jpg') no-repeat`,
        backgroundSize: `cover`
      }}>
          <div className="container">
              <div className="banner-wrap" id="home">
                  <ul className="d-flex social banner-social">
                      {bannerData.socialIcon.map((social,index) => (
                        <SocialIcon data={social} key={index} />
                      ))}
                  </ul>
                  <div className="content-wrap">
                      <div className="banner-inner" data-aos="fade-up" data-aos-delay="0">
                          <h1>{bannerData.authorDesignation}</h1>
                          <div className="dash-wrap">
                              <h2 className="dash">{bannerData.authorName}</h2>
                          </div>
                      </div>
                      <div className="type-text">
                          <span
                              className="txt-rotate"></span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Banner