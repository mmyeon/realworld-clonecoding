import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* height: 100%; */
  position: absolute;
  margin: 50px 0;
  height: 377px;

  > .comment {
    background: #fff;
    width: 400px;
    margin-right: 20px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: baseline;

    &:nth-child(even) {
      top: 45px;
    }

    @media all and (max-width: 991px) {
      width: 380px;
    }

    @media all and (max-width: 767px) {
      width: 339px;
    }

    @media all and (max-width: 575px) {
      width: 301px;
    }

    @media all and (max-width: 420px) {
      width: 269px;
    }

    > .user-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    p {
      word-break: keep-all;
      font-size: 17px;
      line-height: 28px;
      height: 149px;
      overflow: hidden;
      margin-bottom: 30px;

      @media all and (max-width: 575px) {
        font-size: 15px;
        height: 209px;
      }

      @media all and (max-width: 420px) {
        height: 209px;
      }
    }

    a {
      display: flex;
      color: #c869ff;
      font-weight: 500;
      letter-spacing: 0.5px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
export default { Container };
