import React from "react";
import "./about.css";
import ME from "../../assets/me_about.jpg";
import { BsCalendar2Week } from "react-icons/bs";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
import emoji from "emoji-dictionary";

const About = () => {
  return (
    <div className="bg">
      <section id="about">
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME}></img>
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsCalendar2Week className="about__icon" />
                <h5>Saturday-Sunday</h5>
                <small>Tattoo Artist</small>
              </article>
              <article className="about__card">
                <BsCalendar2WeekFill className="about__icon" />
                <h5>Monday-Friday</h5>
                <small>Recruiter in IT</small>
              </article>
              <article className="about__card">
                <GiNightSleep className="about__icon" />
                <h5>Every night</h5>
                <small>Nerd Coder</small>
              </article>
            </div>
            <p>
              My name is Uliana. One of the funniest people you can meet. I love
              raccoons and cats, tattoos, gym and coding. I work 7 days a week
              and kill myself in the gym daily by lifting more than I should. I
              am an immigrant (No, I won't go back to my country, I'm here to
              take your jobs 😉). I hate people without sense of humour and C++.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
