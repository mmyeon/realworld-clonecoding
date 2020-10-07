import React from "react";
import styled from "styled-components";
import star from "../../src/images/game-collection/star.svg";

const Star = styled.img`
  margin-left: 1px;
`;

const Rating = () => {
  return (
    <div className="rating">
      <Star src={star} alt="rating star" />
      <Star src={star} alt="rating star" />
      <Star src={star} alt="rating star" />
      <Star src={star} alt="rating star" />
      <Star src={star} alt="rating star" />
    </div>
  );
};

export default Rating;
