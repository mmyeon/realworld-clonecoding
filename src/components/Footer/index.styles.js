import styled from "styled-components";

const Footer = styled.section`
  background: black;
  color: #fff;
  padding-top: 50px;
  padding-bottom: 100px;

  > .container {
    margin: 0 auto;
    display: flex;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media all and (min-width: 1200px) {
      max-width: 1092px;
      background: red;
    }

    @media all and (max-width: 1199px) {
      max-width: 912px;
    }

    @media all and (max-width: 991px) {
      max-width: 720px;
    }

    @media all and (max-width: 990px) {
      flex-direction: column;
    }

    @media all and (max-width: 767px) {
      max-width: 540px;
    }

    .title {
      padding-bottom: 10px;
    }

    > .footer-left {
      margin-right: 40px;

      p {
        font-size: 13px;
        line-height: 1.8;
        padding-bottom: 20px;
      }
    }

    > .footer-right {
      .icon-top {
        margin-bottom: 10px;

        img {
          margin-right: 20px;
        }
      }

      .icon-bottom {
        display: flex;

        @media all and (max-width: 420px) {
          flex-flow: column;
        }

        img {
          margin-right: 10px;
        }

        > a {
          display: flex;
          align-items: center;
          margin-right: 10px;
          margin-bottom: 10px;

          > span {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export default { Footer };
