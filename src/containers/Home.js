import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Introduction from "../components/Introduction";
import Games from "../components/Games/index";

const Home = () => {
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPageYOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageYOffset]);

  return (
    <>
      <Header pageYOffset={pageYOffset} />
      <Main />
      <Introduction />
      <Games />
    </>
  );
};

export default Home;
