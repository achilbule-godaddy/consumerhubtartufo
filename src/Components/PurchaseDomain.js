import React from "react";
import purchaseOption from "../Constants/purchaseOptions";
import PurchaseDomainLogo from "./Logos/PurchaseDomainLogo";
function PurchaseDomain(props) {
  return (
    <div className="section-row">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="section-title">
              <h3>How to secure your domain.</h3>
              <p>
                After you find your next domain, choose from our trusted retail
                partners. We’ll take you to their site to complete your
                purchase.
              </p>
              <div className="mt-3">
                <a href="/#" className="btn btn-primary">
                  <span>
                    See All Options
                    <PurchaseDomainLogo />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="purchase-domain-logo-list">
              <div className="row">
                {purchaseOption.map((category, index) => {
                  return (
                    <div className="col-6" key={index}>
                      <div className="purchase-domain-logo">
                        <figure>
                          <img src="images/purchase-domain-logo.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDomain;
