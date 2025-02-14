import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <a href='/'><img className='loggo' src={assets.logo} alt="" /></a>
                <p>
                Delight in every bite with eatables! We bring your favorite meals from local restaurants straight to your doorstep, hot and fresh. Whether you’re craving comfort food or exploring new cuisines, we’ve got you covered. Enjoy fast, reliable delivery, secure payments, and a seamless ordering experience—all at your fingertips. Your satisfaction is our priority, because great food deserves great service!
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91-98765-43210</li>
                    <li>contact@eatables.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025 @ eatables.com - All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer