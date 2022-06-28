import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ArrowLogo from "../Logos/ArrowLogo";
import SearchIcon from "../Logos/SearchIcon";
import "@splidejs/react-splide/css";

function TldsMenu({ data }) {
  let tld = [];
  let tl = [];
  let tllist = [];
  let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

  const slider1 = useRef();
  const slider2 = useRef();

  const [searchedText, setSearchedText] = useState("");
  data.map((tl) => {
    var t = [];
    t.push(tl.tld_name);
    t.push(tl.tld_bgimage);
    t.push(tl.tld_bgimage_mobile);
    t.push(tl.tld_placeholder);
    return tld.push(t);
  });

  tld.map((tldata, index) => {
    return tl.push(
      <SplideSlide key={`slide-${index}`} tag="div">
        <div className="hero-banner-slider-box d-flex align-items-end align-items-md-center">
          <div
            className="banner-img d-none d-md-block"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${tldata[1]})`,
            }}
          ></div>
          <div
            className="banner-img d-block d-md-none"
            style={{
              backgroundImage: `url(${process.env.REACT_APP_TLD_IMAGE_URL}${tldata[2]})`,
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-md-8">
                <div className="hero-text mt-md-auto text-white">
                  <h1>
                    Own what <br />
                    you do.
                  </h1>
                  <div className="hero-text-details">
                    <p>
                      Find the perfect domain name that lets folks know who you
                      are and what you're all about
                    </p>
                  </div>
                  <div className="tld-search">
                    <form action="#">
                      <div className="tld-search-form">
                        <span className="search-ico">
                          <SearchIcon />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={tldata[3]}
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
                  <div className="tld-link">
                    <a href="/#">
                      Learn more about <span>.{tldata[0]}</span>
                      <ArrowLogo />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    );
  });

  tld.map((tldata, index) => {
    return tllist.push(
      <SplideSlide key={`slide-${index}`} tag="div">
        <span className="tld-name">.{tldata[0]}</span>
      </SplideSlide>
    );
  });

  const SPLIDE_OPTIONS_main = {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
  };

  const SPLIDE_OPTIONS_thumb = {
    type: "loop",
    isNavigation: true,
    gap: 0,
    focus: 1,
    pagination: false,
    cover: true,
    direction: "ttb",
    heightRatio: 3.1,
    perPage: 15,

    breakpoints: {
      419: {
        heightRatio: 1.8,
        perPage: 6,
      },
      575: {
        heightRatio: 1.6,
        perPage: 7,
      },
      767: {
        heightRatio: 1.6,
        perPage: 7,
      },
      991: {
        heightRatio: 2,
        perPage: 10,
      },
      1199: {
        heightRatio: 2.2,
        perPage: 14,
      },
      1399: {
        heightRatio: 2.3,
        perPage: 14,
      },
    },
  };

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  return (
    <>
      <div className="home-slider-main-box">
        <div className="home-slider-box">
          <div className="main-slider">
            <Splide
              ref={(slider) => (slider1.current = slider)}
              options={SPLIDE_OPTIONS_main}
            >
              {tl}
            </Splide>
          </div>
        </div>

        <div className="tld-slider-main-box">
          <div className="tld-slider-box">
            <div className="tld-slider">
              <Splide
                ref={(slider) => (slider2.current = slider)}
                options={SPLIDE_OPTIONS_thumb}
              >
                {tllist}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TldsMenu;
