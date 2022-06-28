import React from "react";
import fmenu from "../../Constants/fmenu";

function BottomFooter(props) {
  var menuItems = [...fmenu];
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-md-3 d-none d-md-block">
            <div className="copyright-box">
              <p>
                Copyright &copy; 2022 Registry Services, LLC. All Rights
                Reserved.
              </p>
            </div>
          </div>
          <div className="col-md-7 mb-md-3">
            <div className="fmenu-box">
              <ul>
                {menuItems.map((menuItem, index) => {
                  return (
                    <li key={index}>
                      <a href="/#">{menuItem}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-6 d-md-none">
            <div className="personal-information-box">
              <p>Do not sell my personal information</p>
            </div>
          </div>
          <div className="col-md-5 mb-md-3 d-md-none">
            <div className="copyright-box">
              <p>
                Copyright &copy; 2022 Registry Services, LLC. All Rights
                Reserved.
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="fnote-box">
              <p>
                Use of this Site is subject to express terms of use. By using
                this site, you signify that you agree to be bounted by these
                Universal Terms of Service.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div className="personal-information-box">
              <p>Do not sell my personal information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
