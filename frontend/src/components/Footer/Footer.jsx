import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Welcome to Fast Food! 🍔🚀

            Craving a delicious meal without the wait? You've come to the right place! At Fast Food, we bring your favorite dishes right to your doorstep in no time. With a wide variety of mouth-watering options—from tasty pasty to fresh salads—we've got something to satisfy every craving.
            Join the Fast Food family today and experience the convenience and flavor you’ve been dreaming of. Your next meal is just a click away!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0222828292</li>
            <li>contact@FASTFOOD.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FASTFOOD.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
