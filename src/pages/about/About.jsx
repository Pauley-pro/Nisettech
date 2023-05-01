import React from 'react';
import "./About.css"
import Header from '../../components/Header';
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam volutatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam volutatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates</p>
            <p>Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissima alias ipsum minima consequuntur?</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam volutatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam volutatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates</p>
          </div>
         <div className="about__section-image">
            <img src={VisionImage} alt="" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam volutatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam volutatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates</p>
            <p>Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissima alias ipsum minima consequuntur?</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About