import "./Footer.scss";
import React from "react";
import { FaLocationArrow,FaMobileAlt,FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Welcome to Engineering Book Store Online, 
                    your premier destination for all things engineering-related
                     in the realm of literature. We are dedicated to providing 
                     a comprehensive selection of high-quality books catering to 
                     various disciplines within the vast field of engineering.
                    </div>
                </div>
                <div className="col"> <div className="title">Contact</div>
                     <div className="c-item">
                        <FaLocationArrow/>
                        <div className="text">
                            parvatpur, Khandauli, Agra, 283126
                        </div>
                     </div>
                     <div className="c-item">
                        <FaMobileAlt/>
                        <div className="text">
                          Phone: 0819 384 9780
                        </div>
                     </div>
                     <div className="c-item">
                        <FaEnvelope/>
                        <div className="text">
                          Email: akashvaishnav9897@gmail.com
                        </div>
                     </div>
                </div>
                <div className="col"> <div className="title">Categories </div>
                <div className="text">Computer Science Engineering</div>
                <div className="text">Mechatronics engineering</div>
                <div className="text">Civil Engineering</div>
                <div className="text">Chemical engineering</div>
                <div className="text">Electrical engineering</div>
                <div className="text">Agricultural engineering</div>
                        
                       </div>
                <div className="col">
                 <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
                </div>

            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        BOOKS STORE 2024 CREATED BY AKASH VAISHNAV 
                    </div>
                    <img src={payment}  />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
