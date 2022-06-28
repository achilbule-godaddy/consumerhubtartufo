import React from "react";
import GoDaddyLogo from "../Logos/GoDaddyLogo";
import TwitterLogo from "../Logos/TwitterLogo";

function TopFooter(props) {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col">
            <div className="flogo">
              <GoDaddyLogo />
            </div>
          </div>
          <div className="col-md-6 col">
            <div className="f-social d-flex mt-0 justify-content-end">
              {" "}
              <a href="/#">
                <TwitterLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
