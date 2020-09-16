import styled from "styled-components";
import { device } from "../../device";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 56px;
  background: ${(props) => (props.isBackgroundWhite ? "#fff" : "#05040469")};
  z-index: 10;
  transition: 0.3s;

  > .container {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1140px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 0 15px;

    @media all and (max-width: 1199px) {
      max-width: 954px;
    }

    @media all and (max-width: 991px) {
      max-width: 755px;
    }

    @media all and (max-width: 767px) {
      max-width: 575px;
    }
  }
`;

const Logo = styled.img`
  width: 170px;
  padding-left: 10px;
  cursor: pointer;

  @media ${device.tablet} {
    max-width: 954px;
  }
`;

export default {
  HeaderContainer,
  Logo,
};
