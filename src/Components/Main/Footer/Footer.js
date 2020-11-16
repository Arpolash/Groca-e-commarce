import React from 'react';
import logo from '../../../Grocary/logo/logo.webp';

const Footer = () => {
    return (
        <div className="footer pt-5 mt-5 text-white">
        <div className="mt-5 container">
            <div className="row">
                <div className="col-md-3">
                    <img className="my-4" src={logo} alt=""/>
                    <br/>
                    <span><i class="fas fa-home mr-3"></i></span>  <span> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
                    <br/>
                    <span><i class="fas fa-phone mr-3"></i></span><span>+91 12345678</span>
                    <br/>
                    <span><i class="fas fa-envelope mr-3"></i></span><span> support@somemail.com</span>
                    <br/>
                    <br/>
                    <span className="m-2 text-info" style={{fontSize:'22px'}}><i class="fab fa-twitter-square"></i></span>
                    <span className="m-2 text-info" style={{fontSize:'22px'}}><i class="fab fa-facebook-square"></i></span>
                    <span className="m-2 text-info" style={{fontSize:'22px'}}><i class="fab fa-google-plus-square"></i></span>
                    <span className="m-2 text-info" style={{fontSize:'22px'}}><i class="fab fa-linkedin"></i></span>
                    <span className="m-2 text-info" style={{fontSize:'22px'}}><i class="fab fa-instagram-square"></i></span>
                    <span className="m-2 text-info" style={{fontSize:'22px'}}><i class="fas fa-envelope mr-3"></i></span>
                </div>
                <div className="col-md-3">
                    <h4 className="my-4">Help</h4>
                    <h6>Search</h6>
                    <h6>Help</h6>
                    <h6>Information</h6>
                    <h6>Privacy Policy</h6>
                    <h6>Shipping Information</h6>
                </div>
                <div className="col-md-3">
                    <h4 className="my-4">Support</h4>
                        <h6>Contact</h6>
                    <h6> About Us</h6>
                        <h6>Carrers</h6>
                    <h6> Refund & Returns</h6>
                        <h6>Deliveries</h6>
                </div>
                <div className="col-md-3">
                    <h4 className="my-4">Information</h4>
                        <h6>Search Terms</h6>
                        <h6> Advanced Search</h6>
                        <h6> Helps & Faqs</h6>
                        <h6> Store Location</h6>
                        <h6> Orders & Returns</h6>
                </div>
            </div>
          
        </div>
        <h6 className="text-center pb-2">© 2020 Groca All Rights Reserved. </h6>
        </div>
    );
};

export default Footer;