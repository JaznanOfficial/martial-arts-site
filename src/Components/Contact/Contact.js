import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-div">
            <img src="./martial-arts-logo.png" alt="" width="200px" />
            <h5 className='mt-5'>"Martial arts academy has specialized in martial arts since 1986 and has one of the most
                innovative programs in the nation."</h5>
            <h5 className='mt-5'><strong> <i class="fas fa-address-card"></i><br /> Middle of the bay of bengal, Bangladesh</strong></h5>
            <h5><strong><i class="fas fa-phone"></i><br />+880 123456789</strong></h5>
           <h5> <strong><i class="fas fa-envelope-open-text"></i><br /> bayofbengal@shomudro.com</strong></h5>
        </div>
    );
};

export default Contact;
