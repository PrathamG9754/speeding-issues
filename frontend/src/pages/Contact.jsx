import React from "react";
import { styled } from "styled-components";

const Contact = () => {
  return (
    <DIV>
      <h1>Contact Us</h1>
      <p>
        We’re here to help! Reach out to us with any questions, feedback, or
        concerns. Our team is committed to providing excellent support and
        ensuring your experience with Speeding Issues is smooth and hassle-free.
      </p>
      <ul>
        <li>Email: support@speedingissues.com</li>
        <li>Phone: +91 9779634821 </li>
        <li>Address: Plot no. 01, Sector 2 Chandigarh, Industrial area.</li>
      </ul>
    </DIV>
  );
};

export default Contact;

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
    margin-bottom: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    font-size: 18px;
    line-height: 1.8;

    li {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;
