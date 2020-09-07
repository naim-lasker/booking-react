import React from "react"
import { FaFacebookF, FaTwitter, FaYoutube, FaGooglePlus, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-4 mb-5 mb-md-0'>
                        <h4 className='footer-title text-md-left text-center'>
                            Useful Links
                        </h4>
                        <ul className='footer-list text-md-left text-center'>
                            <li className='footer-list-item'>
                                <a href='#'>About Us</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Provider</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>FAQ</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Help</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Accessbility</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Contact Us</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Jobs</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Site Map</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Website Feedback</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-3 col-md-4 mb-5 mb-md-0'>
                        <h4 className='footer-title text-md-left text-center'>
                            Legal
                        </h4>
                        <ul className='footer-list text-md-left text-center'>
                            <li className='footer-list-item'>
                                <a href='#'>Terms and Conditions</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Privacy Policy</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Cookie Policy</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Legal</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-3 col-md-4 mb-5 mb-md-0'>
                        <h4 className='footer-title text-md-left text-center'></h4>
                        <ul className='footer-list text-md-left text-center'>
                            <li className='footer-list-item'>
                                <a href='#'>10 Albion Estate</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>Rotherhithe</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>London</a>
                            </li>
                            <li className='footer-list-item'>
                                <a href='#'>SE16 7DL</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='row justify-content-center mt-4'>
                    <div className='col-lg-5'>
                        <div className='social-icons text-center'>
                            <a href='#' className='social-icon'>
                                <FaFacebookF />
                            </a>
                            <a href='#' className='social-icon'>
                                <FaTwitter />
                            </a>
                            <a href='#' className='social-icon'>
                                <FaYoutube />
                            </a>
                            <a href='#' className='social-icon'>
                                <FaGooglePlus />
                            </a>
                            <a href='#' className='social-icon'>
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-12 mt-3'>
                        <p className='m-0 text-center'>
                            Copyright © 2018 Seylax. All rights reserved.
                            Powered by BIT
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
