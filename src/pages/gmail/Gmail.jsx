import React, { useRef, useState } from "react";
import "./Gmail.css";
import emailjs from "@emailjs/browser";

const Gmail = () => {
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
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <div className="contact-form" id="contact">
      <div className="c-right" id="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="buttonSub"/>
          <span>{done && "Thanks for Contacting Nis'etech"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Gmail;
