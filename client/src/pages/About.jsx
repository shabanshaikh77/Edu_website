import React from "react";
import { useAuth } from "../store/auth";
import Aboutpage from "../images/about.png";
export const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Welcome,
               {user ? ` ${user.username} to our website` : ` to our website`}</p>
              <h1>Why About Us</h1>
              <p>
                Here our mission is to empower you to achieve your educational
                and professional goals. Since 2012, we've been at the forefront
                of delivering high-quality, accessible, affordable online
                education.
                <br />
                <br />
                Our instructors are industry experts with real-world experience,
                committed to your learning and success.
                <br />
                <br />
                Learn at your own pace, with access to course materials online
                24/7 from anywhere in the world.
                <br />
                <br />
                Join a growing community of learners from around the globe. Get
                the support you need through our dedicated student forums and
                expert tutors.
                <br />
                <br />
                Receive certifications that can help boost your resume and
                professional credibility. <br />
                <br />
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src={Aboutpage}
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>

          <div className="div1">
            <h2>10,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Services</p>
          </div>
        </div>
      </section>

    </>
  );
};
