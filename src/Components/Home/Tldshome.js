import React from "react";
import { useState, useEffect } from "react";
import TldsMenu from "./TldsMenu";
import { getAllTlds } from "../../Services/homeApi";
function Tldshome(props) {
  var [tldData, setTldData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      var tdata = await getAllTlds();
      setTldData(tdata);
    };
    fetchData();
  }, []);

  return <TldsMenu data={tldData} />;
}

export default Tldshome;
