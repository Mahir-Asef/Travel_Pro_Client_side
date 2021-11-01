import React from 'react';
import video from '../../images/hero/hero.mp4';
import './HeroSection.css';
import {Button} from 'react-bootstrap';
import { NavLink}  from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="hero-section">
        <div className="hero-background">
          <video className="video-background" autoPlay loop muted>
            <source src={video} type="video/mp4"></source>
          </video>
          <div className="overlay"></div>
        </div>
        <div className="main-title">
          <h2 className="sub-text">Best Travel agency in town</h2>
          <h1 className="main-text mb-sm-3">
          WELCOME TO TRAVEL PRO
          </h1>
          <p className=" hero-details-text text-white mb-sm-5">
            We are here to provide you best service.Your requirement is our first priority.
          </p>
          <NavLink to="/login"><Button className="btn-danger" >Login Here</Button></NavLink>
        </div>
      </div>
  
    );
};

export default HeroSection;