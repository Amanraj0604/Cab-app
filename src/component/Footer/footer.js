import React from 'react'
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BiHomeCircle } from 'react-icons/bi';

const Footer = () => {
    return (
        <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Our service offers mobility solutions by connecting customer to drivers and a wide range of vehicles across bikes,auto-rickshaws,metered taxis,and cabs,enabling convenience and transparency for hundreds of millions of consumers and over 1.5 millions driver-partners.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="##">Car</a></li>
              <li><a href="##">Bus</a></li>
              <li><a href="##">Auto</a></li>
              <li><a href="##">Premium</a></li>
             
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="##">About Us</a></li>
              <li><a href="##">Contact Us</a></li>
    
              <li><a href="##">Privacy Policy</a></li>
            
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">Aman Raj</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><AiFillFacebook/></a></li>
              <li><a className="twitter" href="#"> <AiFillTwitterCircle/></a></li>
              <li><a className="dribbble" href="#"><BsInstagram/></a></li>
              <li><a className="linkedin" href="#"> <BiHomeCircle/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        
        </>
    )
}

export default Footer
