import React from "react";
import SearchIcon from "./Logos/SearchIcon";
import { Link } from "react-router-dom";
import { useState } from "react";

function PerfectDomain(props) {
  const [searchedText, setSearchedText] = useState("");
  let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
  return (
    <div className="section-row bg-theme tld-search-bottom-row">
      <div className="section-row">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="tld-search-bottom text-center">
                <h2 className="mb-4">
                  A domain name just for you — one that tells your story.
                </h2>
                <div className="tld-search">
                  <form action="#">
                    <div className="tld-search-form">
                      <span className="search-ico">
                        <SearchIcon />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Find your perfect domain"
                        onChange={(e) => {
                          let text = e.target.value;
                          if (regex.test(text)) {
                            setSearchedText("");
                          } else {
                            setSearchedText(text);
                          }
                        }}
                      />
                      <Link
                        to={
                          searchedText
                            ? `/domainresult?domain=${searchedText}`
                            : "/"
                        }
                      >
                        <button
                          type="submit"
                          className="search-btn btn btn-primary"
                        >
                          <span className="search-ico">
                            <SearchIcon />
                          </span>
                          <span>Search Domains</span>
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfectDomain;
