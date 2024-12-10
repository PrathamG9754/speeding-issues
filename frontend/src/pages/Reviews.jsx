import React from "react";
import { styled } from "styled-components";

const Reviews = () => {
  return (
    <DIV>
      <h1>Customer Reviews</h1>
      <p>
        Hear from our satisfied customers! At Speeding Issues, we pride
        ourselves on delivering exceptional service and quality vehicles. Here's
        what our customers have to say:
      </p>
      <div className="reviews-container">
        <div className="review">
          <p>
            "Amazing experience! Found my dream car at an unbeatable price.
            Highly recommend!" - <strong>John Doe</strong>
          </p>
        </div>
        <div className="review">
          <p>
            "Great service and a smooth process. The team was incredibly
            helpful." - <strong>Jane Smith</strong>
          </p>
        </div>
        <div className="review">
          <p>
            "Best dealership in town! The selection and prices are unmatched." -
            <strong> Mike Wilson</strong>
          </p>
        </div>
      </div>
    </DIV>
  );
};

export default Reviews;

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

  .reviews-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 800px;
  }

  .review {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    p {
      font-size: 16px;
      line-height: 1.5;
      color: #444444;
    }

    strong {
      color: #222732;
    }
  }
`;
