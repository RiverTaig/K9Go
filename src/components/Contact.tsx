// About.tsx
import React from 'react';
import styles from './Contacts.module.css';

const Contact: React.FC = () => {
    return (
        <div>
            <h2>CONTACT US</h2>
            <p>Thank you for your interest in K9GO.app!  We love hearing from our customers by phone, text, or email.
                Please feel free to reach out to us with any questions, comments, or concerns that you might have.

            </p>
            <div  className='blue'>
                <p>Phone/Text: <b>(970) 545-0023</b></p>
                <p>Email: <b>River@K9Go.app</b></p>
            </div>

        </div>
    );
}

export default Contact;