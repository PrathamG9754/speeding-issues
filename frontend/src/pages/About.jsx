import React from "react";
import { styled } from "styled-components";

const About = () => {
  return (
    <DIV>
      <h1>About Us</h1>
      <p>
        Welcome to Speeding Issues, your trusted destination for buying and
        selling cars with ease and confidence. We are passionate about
        connecting buyers and sellers, offering a seamless platform for all your
        automotive needs. Whether you're searching for your dream car or looking
        to sell your current one, we provide a user-friendly experience,
        transparent processes, and a diverse selection of vehicles to suit every
        budget and preference. At Speeding Issues, customer satisfaction is our
        top priority, and we strive to make your journey smooth, secure, and
        hassle-free. Join us today and drive into a world of endless
        possibilities!
      </p>

      <p>
        Our team members: Prashant Sharma, Pratham Garg, Piyush Kapoor, Rajat Gupta.
        
      </p>

      
    </DIV>
  );
};

export default About;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f8f9fa;
  color: #222732;

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #222732;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    text-align: center;
    max-width: 800px;
  }
`;
