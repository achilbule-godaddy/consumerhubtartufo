import React from "react";
import { useState, useEffect } from "react";
import { getSpotlightInfo } from "../Services/homeApi";
import SpotlightLogo from "./Logos/SpotlightLogo";

function Spotlight(props) {
  var [spotlightData, setSpotlightData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let spotdata = await getSpotlightInfo();
      setSpotlightData(spotdata);
    };
    fetchData();
  }, []);
  const capitalLetter = (string) => {
    return string.toUpperCase();
  };
  return (
    <>
      {spotlightData !== null ? (
        <div className="section-row spot-light-row d-md-flex align-items-center">
          <div
            className="bg-img d-none d-md-block"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${spotlightData.tld_bgimage}`,
            }}
          ></div>
          <div
            className="bg-img d-block d-md-none"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${spotlightData.tld_bgimage_mobile})`,
            }}
          ></div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="spot-light-box">
                  <h5>Spotlight</h5>
                  <h3>
                    .
                    {spotlightData.tld_name &&
                      capitalLetter(spotlightData.tld_name)}
                  </h3>
                  <p>{spotlightData.tld_spotlight_desc}</p>
                  <a href="/#" className="btn btn-secondary">
                    <span>
                      Get Your .{spotlightData.tld_name}
                      <SpotlightLogo />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Spotlight;
