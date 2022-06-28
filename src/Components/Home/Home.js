import React from "react";
import Navigation from "./Navigation";
import PurchaseDomain from "../PurchaseDomain";
import PerfectDomain from "../PerfectDomain";
import HomeFooter from "../Footer/HomeFooter";
import Spotlight from "../Spotlight";
import Tldshome from "./Tldshome.js";
import CategoryBox from "../Categories/CategoryBox";

function Home(props) {
  return (
    <>
      <Navigation />
      <Tldshome />
      <CategoryBox />
      <Spotlight />
      <PurchaseDomain />
      <PerfectDomain />
      <HomeFooter />
    </>
  );
}

export default Home;
