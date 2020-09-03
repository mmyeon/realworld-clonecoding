import styled from "styled-components";

const Games = styled.section`
  background: #fafafa;
  width: 100%;
  /* TODO: 임시설정 */
  height: 60vw;
  position: relative;
  /* TODO: 게임이미지 보이지 않게 overflow설정 */
  /* overflow: hidden; */

  > .motif {
    position: absolute;
    width: 180px;
    top: 74px;
    left: 7%;
  }

  > h2 {
    padding-top: 111px;
    font-size: 2.1rem;
    margin-left: 13%;
    font-weight: 400;
    margin-bottom: 20px;
  }

  > .gamelist {
    display: flex;
    position: absolute;
    /* TODO: 변경될 숫자 */
    left: 192px;
    transition: 0.5s;
  }
`;

export default { Games };
