import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/CarTrade.svg";

const Footer = () => {
  return (
    <DIV>
      <footer>
        <ul>
        <li>
            <Link to="" className="footer-link">
              Listing
            </Link>
          </li>
          <li>
            <Link to="" className="footer-link">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer-link">
              About Us
            </Link>
          </li>
        </ul>

        <ul>
        <li>
            <Link to="" className="footer-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="" className="footer-link">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </li>
        </ul>

        <p>
          Award-winning, family owned dealership of new and pre-owned vehicles
          with several locations across the city. Lowest prices and the best
          customer service guaranteed.
        </p>
      </footer>
    </DIV>
  );
};

export default Footer;

const DIV = styled.div`
  width: 100%;
  background-color: #222732;
  height: 400px;
  margin-top: 50px;

  footer {
    padding-top: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;

    p {
      width: 400px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin: 10px;
      text-align: start;
      font-size: 20px;
      font-weight: 400;
      color: white;
    }

    .footer-link {
      text-decoration: none; /* Remove underline */
      color: white; /* Match text color */
    }

    .footer-link:hover {
      text-decoration: underline; /* Optional hover effect */
    }

    li::marker {
      content: "•"; /* Set the marker to a disc (•) */
      color: red; /* Change the color to your desired color */
      margin-right: 20px;
    }
  }
`;
