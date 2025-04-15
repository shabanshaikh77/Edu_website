import React from "react";
import homeImage from "../images/home.png";
import design from "../images/design.png";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to knowledgexpress</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Thapa Technical,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
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
                src={homeImage}
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

      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
          <div className="hero-image">
              <img
                src={design}
                alt="coding together"
                width="400"
                height="500"
              />
            </div>

            <div className="hero-content">
              <p>We are here to help you </p>
              <h1>Get Started Today</h1>
              <p>
                Ready to take first step towrds more secure and efficient IT infrastructure?
                Cotact us today for free consultation and lets discuss how thapa technical can help your buisness 
                thrive in the digital age.

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
            
          </div>
        </section>
      </main>
    </>
  );
};
