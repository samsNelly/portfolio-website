import "./FooterStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

import { 
    FaHome, 
    FaPhone, 
    FaEnvelope,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Minneapolis, MN, USA</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        507-398-5938
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaEnvelope size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        samunels13@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                    <NavLink to="https://www.linkedin.com/in/samuelnelson1302">
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </NavLink>
                    <NavLink to="https://github.com/samsNelly"> 
                        <FaGithub size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer