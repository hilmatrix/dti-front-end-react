import React from 'react';
import HeroCircle from "../../assets/hero-circle.png";
import "./style.css";

const Index: React.FC = () => {
  return (
    <div className='contact-info'>
        <div className='contact-info-image'>
            <img src={HeroCircle}></img>
        </div>
        <div className='contact-info-details'>
            <span>Contact Details</span>
            <span>ayush.barnwal@brightscout.com</span>
            <span>+91 8651447521</span>
        </div>
        <div className='contact-info-social'>
            <nav>
                <ul>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Webflow</li>
                    <li>Figma</li>
                </ul>
            </nav>
        </div>
    </div>
  );
}

export default Index;
