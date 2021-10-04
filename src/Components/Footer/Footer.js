import React from 'react';
import './Footer.css'
import img from './martial-arts-logo.png'

const Footer = () => {
    return (
        <div className='footer d-flex justify-content-center my-2 align-items-center'>
            <img src={img} alt="" width='100px' className='rounded-circle m-2' />
            <div>
                <h1>Martial Arts Academy</h1>
                <h4>© Copyright 2021, All Rights Reserved</h4>
            </div>
        </div>
    );
};

export default Footer;