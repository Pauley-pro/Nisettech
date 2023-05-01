import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail, MdOutlineClose } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";


const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEmailClick = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mf0tv0j",
        "template_jai3v7c",
        form.current,
        "cLOrN2pwznKas0Yvm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
          setTimeout(() => {
            setDone(false);
          }, 10000); // Hide message after 10 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        We are dedicated to providing the best possible service to our customers
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="#" onClick={handleEmailClick}>
              <MdEmail />
            </a>
            <a href="https://www.facebook.com/Nisettechnology">
              <BsMessenger />
            </a>
            <a href="https://wa.me/+2348025877674">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <button onClick={handleCloseModal} className="butModal"><MdOutlineClose /></button>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user" id="user"  placeholder="Name"/>
              <input type="email" name="user_email" className="user" id="user" placeholder="Email"/>
              <textarea name="message" className="user" placeholder="Message"/>
              <input type="submit" value="Send" className="btn lg"/>
              <span>{done && "Thanks for Contacting Nis'etech"}</span>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Contact;
