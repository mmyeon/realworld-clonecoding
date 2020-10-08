import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Introduction from "../components/Introduction";
import Games from "../components/Games/index";
import Howto from "../components/Howto/index";
import Review from "../components/Review/index";

const Home = () => {
  return (
    <>
      <Header />

      <Main />

      <Introduction />

      <Games />

      <Howto />

      <Review />
    </>
  );
};

export default Home;
