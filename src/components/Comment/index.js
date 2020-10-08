import React from "react";
import Styled from "./index.styles";
import Rating from "../Rating";
import chevron from "../../images/review/chevron-right.svg";
import commentList from "../../commentList";

const index = () => {
  return (
    <Styled.Container>
      {commentList.map((item, i) => (
        <div className="comment">
          <div className="user-info">
            <h2 className="username">{item.userName}</h2>
            <Rating />
          </div>

          <p>{item.comment}</p>

          <a href={item.gamePage}>
            {item.gameName}
            <img src={chevron} alt="chevron" />
          </a>
        </div>
      ))}
    </Styled.Container>
  );
};

export default index;
