import styled from "styled-components";

const Howto = styled.section`
  position: relative;
  margin: 0 auto;
  text-align: center;
  padding: 100px 0;

  @media all and (max-width: 1199px) {
    max-width: 912px;
  }

  /* TODO:참고 */
  /* 
  @media all and (max-width: 991px) {
    height: 56px;
    max-width: 720px;
    margin: 9px auto;
  }

  @media all and (max-width: 767px) {
    max-width: 540px;
  }

  @media all and (max-width: 575px) {
    max-width: 527px;
  } */

  > .background-image {
    position: absolute;
    right: -180px;
    top: -230px;
    z-index: -1;
    width: 670px;
  }

  .main-title {
    font-weight: 500;
    font-size: 2.1rem;

    > .bold {
      font-weight: 800;
    }
  }

  .howto-container {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Step = styled.div`
  /* padding: 0 20px; */

  > img {
    /* width: 87.7%; */
    /* margin: 0 20px; */
  }

  > p {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 20px 0;
    line-height: 26px;
  }
`;

export default { Howto, Step };
