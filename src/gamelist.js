import agentX from "../src/images/game-collection/agent-x.png";
import lastCollection from "../src/images/game-collection/last-collection.png";
import jungdong from "../src/images/game-collection/jungdong.png";
import midnight from "../src/images/game-collection/midnight.jpg";
import secret from "../src/images/game-collection/secret.jpg";
import miracle from "../src/images/game-collection/miracle.jpg";

const gamelist = [
  {
    id: 1,
    image: agentX,
    location: "서울숲 일대",
    title: "AGENT X",
    titleDetail: "암흑조직의 음모를 막아라!",
  },
  {
    id: 2,
    image: lastCollection,
    location: "동대문 일대",
    title: "라스트 콜렉션",
    titleDetail:
      "패션의 메카 동대문에서 스승님의 메시지를 찾고 컬렉션을 완성하라!",
  },
  {
    id: 3,
    image: jungdong,
    location: "서울 정동 일대",
    title: "정동 밀서",
    titleDetail:
      "🎉재오픈🎉 정동에 숨겨진 비밀을 풀고 위기에 처한 독립운동을 지켜라!",
  },
  {
    id: 4,
    image: midnight,
    location: "온라인",
    title: "Midnight Train",
    titleDetail: "당신은 지금 어디쯤에 있나요?",
  },
  {
    id: 5,
    image: secret,
    location: "서울 / 전주 / 부산",
    title: "태양단의 비밀",
    titleDetail: "한반도를 지키는 9개의 국보를 찾아라! 서울 / 전주 / 부산",
  },
  {
    id: 6,
    image: miracle,
    location: "서울극장 (서울특별시 종로구 돈화문로 13) 일대",
    title: "미라클",
    titleDetail: "당신에게 일어날 기적같은 이야기",
  },
];

export default gamelist;
