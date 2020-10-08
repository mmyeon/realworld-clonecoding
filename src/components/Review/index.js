import React from "react";
import Styled from "./index.styles";
import backgroundImage from "../../images/motif-yellow.svg";
import Comment from "../Comment/index";
import Button from "../Button";

const index = () => {
  return (
    <Styled.Review>
      <div className="review-content">
        <img
          className="background-image"
          src={backgroundImage}
          alt="yellow-line"
        />
        <h1>
          지금
          <span className="text-bold"> 3,984</span>명이
          <br></br>
          리얼월드에서 이야기를 나누고 있어요.
        </h1>

        <Comment />
        <Button
          href="https://realworld.to/projects"
          top="464px"
          position="relative"
          content="게임하고 후기남기기"
        />
      </div>
    </Styled.Review>
  );
};

export default index;
