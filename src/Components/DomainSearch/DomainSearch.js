import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllTlds } from "../../Services/homeApi";
import axios from "axios";
import "../../css/domainsearch.css";
function DomainSearch(props) {
  const location = useLocation();
  let domain = location.search?.split("=")[1];
  let tld = domain.split(".");
  if (tld.length === 2) {
    domain = tld[0];
  }
  const [tldData, setTldData] = useState([]);
  const [searchAvailable, setSearchAvailable] = useState([]);
  const [domainAvail, setDomainAvail] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let data = await getAllTlds();
      let serverDetail = [];
      data.map((tld) => {
        if (tld.tld_whois_server !== "") {
          let t = [];
          t.push(tld.tld_name);
          t.push(tld.tld_whois_server);
          serverDetail.push(t);
        }
        return serverDetail;
      });
      setTldData(serverDetail);
    };
    getData();
  }, []);

  useEffect(() => {
    let serachArray = [];
    tldData.map((tld) => {
      return serachArray.push(
        axios.get(
          `${process.env.REACT_APP_SEARCHDOMAINAPI_URL}/cms/hub/whoisapi.php?domain=${domain}&tld=${tld[0]}&whois_server=${tld[1]}`
        )
      );
    });
    setSearchAvailable(serachArray);
  }, [tldData, domain]);

  useEffect(() => {
    let getData = async () => {
      let data = await Promise.all([...searchAvailable]);
      setDomainAvail(data);
    };
    getData();
  }, [searchAvailable]);

  return (
    <div className="App">
      {domainAvail.map((item, index) => (
        <div className="DomainCheckContainer" key={index}>
          <div className="DomainCheckDomain">{item.data.domain}</div>

          {item.data.status === "Available" ? (
            <div className="DomainCheckStatus avalibleStatus">
              {item.data.status}
            </div>
          ) : (
            <div className="DomainCheckStatus nonAvalibleStatus">
              {item.data.status}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DomainSearch;
