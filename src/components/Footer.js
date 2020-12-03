import React from 'react';
import { Link } from "react-router-dom";

import './styles/Menu.css'

const Footer = () => {
    return (
        <Link to="/">
            <button className="footer">Go Back</button>
        </Link>
    );
};

export default Footer;