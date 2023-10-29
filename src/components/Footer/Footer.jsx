import React from "react";
import darkLogo from '../../assests/drakLogo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <img src={darkLogo} alt="dark Logo" className="darkLogo"/>
            </div>
            <p>
            © 2020 Kasa. All rights reserved
            </p>
        </div>
    );
}

export default Footer