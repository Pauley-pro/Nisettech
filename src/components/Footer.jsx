import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.jpg";
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="" />
                    </Link>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/">Services</Link>
                    <Link to="/">Values</Link>
                    <Link to="/">FAQs</Link>
                    <Link to="/">Testimonials</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <div className="footer__socials">
                        <a href="mailto:nisetechnology@gmail.com" target="_blank" rel="noreferrer noopener">
                            <MdEmail />
                        </a>
                        <a href="https://facebook.com/Nisettechnology" target="_blank" rel="noreferrer noopener">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com/nisetechnology" target="_blank" rel="noreferrer noopener">
                            <AiFillInstagram />
                        </a>
                    </div>
                </article>
            </div>
            <div className="footer__copyright">
                <small>{year} Nisetechnology &copy; All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer