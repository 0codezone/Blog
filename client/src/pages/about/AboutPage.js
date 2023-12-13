import React from "react";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our amazing company! We are dedicated to providing the best
        products/services to our customers and making a positive impact on the
        world.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to [insert your mission statement here]. We strive to
        deliver excellence in everything we do and make a difference in the
        lives of our customers.
      </p>
      <h2>Meet the Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="https://placekitten.com/150/150" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://placekitten.com/151/151" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default AboutPage;
