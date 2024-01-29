import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaSpotify, FaTwitter } from 'react-icons/fa';
import './Footer.css'
import images from '../../constants/images';
const Footer = () => {
  return (
    <>
      <div className="Footer_Container">
        <div className="Footer_AboutUs_Section">
          <ul>
            <li className='Footer_AboutUs_title'>
            Platform
            </li>
            <li><Link to="/about">Chat</Link></li>
            <li><Link to="/leadership">AI Prompt Library</Link></li>
            <li><Link to="/values">AI Tools</Link></li>
            <li><Link to="/investor">Infobase</Link></li>
            <li><Link to="/news">Notifications</Link></li>
          </ul>
        </div>
        <div className="Footer_Services_Section">
          <ul>
            <li className="Footer_Services_title">
            Use Cases
            </li>
            <li><Link to="/services">Translations</Link></li>
            <li><Link to="/mobile-order">Blog Content</Link></li>
            <li><Link to="/trending">Trending Now</Link></li>
            <li><Link to="/delivery">Deliver nlp®</Link></li>
            <li><Link to="/cafe">Email Marketing</Link></li>
          </ul>
        </div>
        <div className="Footer_ContactUs_Section">
          <ul>
            <li className="Footer_ContactUs_title">
              ContactUs/Support
            </li>
            <li><Link to="/contact">Request a Demo</Link></li>
            <li><Link to="/gift-card">Contact Us</Link></li>
            <li><Link to="/donations">Report a Bug</Link></li>
            <li><Link to="/employment">Request a New Feature</Link></li>
            <li><Link to="/faq">Frequently Asked<br />Questions</Link></li>
          </ul>
        </div>
        <div className="Footer_Images_Section">
          <Link to="">
            <img src={images.footerImage} alt="VisualOne" className='appStoreImageOne' /></Link>
        </div>

      </div>
      <div className="Footer_SocialMedia_Section_cont">
        <div className="Footer_SocialMedia_Section">
          <ul className='Footer_SocialMedia_Ul'>
            <li>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.spotify.com">
                <FaSpotify />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>

        <li className='AllRightReserve'>© 2017 - 2023 AiModels. All Rights Reserved</li>

      </div>
    </>
  );
}

export default Footer;