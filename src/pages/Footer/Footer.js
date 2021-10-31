import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <div className="footer">
                <div>
                    <h3><i class="fas fa-mobile-alt icons"></i></h3>
                    <h3 className="text-white">Call us</h3>
                    <p className="text-white">1283-64322</p>
                </div>
                <div>
                <h3><i class="far fa-map icons"></i></h3>
                <h3 className="text-white">Address</h3>
                <p className="text-white">730/C, NG- 11, Shahid Baki Sarak, Khilgoan, <br />
                 Opposite of Sonali Bank, Beside Walton <br />
                 Showroom. Dhaka -1219, Bangladesh.</p>
                </div>
                <div>
                <h3><i class="fas fa-envelope icons"></i></h3>
                <h3 className="text-white">Email</h3>
                <p className="text-white">mahirasef30@gmail.com</p>
                </div>
            </div>
            <div className="footer-text">
                <small className="text-center ">©Copyright 2021. All Rights Reserved by Travel Pro.</small>
            </div>
        </div>
    );
};

export default Footer;