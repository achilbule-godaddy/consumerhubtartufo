import React from "react";
import purchaseOption from "../Constants/purchaseOptions";
import { getAllChannelPartner } from "../Services/homeApi";
import PurchaseDomainLogo from "./Logos/PurchaseDomainLogo";
import { useState, useEffect } from "react";
function PurchaseDomain(props) {
  const [channelPartner, setChannelPartner] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllChannelPartner();
      setChannelPartner(data);
    };
    fetchData();
  }, []);

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
                {channelPartner.map((partner, index) => {
                  return (
                    <div className="col-6" key={index}>
                      <div className="purchase-domain-logo">
                        <figure>
                          <img
                            src={`${process.env.REACT_APP_TLD_CHANNEL_IMAGE_URL}${partner.channel_partner_image}`}
                            alt=""
                          />
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
