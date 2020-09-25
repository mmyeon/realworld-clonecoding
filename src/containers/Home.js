import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Introduction from "../components/Introduction";
import Games from "../components/Games/index";
import Howto from "../components/Howto/index";

const Home = () => {
  return (
    <>
      <Header />

      <Main />

      <Introduction />

      <Games />

      {/* <Howto /> */}
    </>
  );
};

export default Home;
