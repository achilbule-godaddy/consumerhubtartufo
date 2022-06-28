import React from "react";

function ArrowLogo(props) {
  return (
    <span className="arrow-ico">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{ enableBackground: "new 0 0 24 24" }}
        xmlSpace="preserve"
      >
        <path
          d="M23.89,12.57c0.15-0.37,0.15-0.78,0-1.15c-0.08-0.18-0.19-0.35-0.32-0.49l-10.5-10.5c-0.59-0.59-1.54-0.59-2.12,0
                                                s-0.59,1.54,0,2.12l7.94,7.94H1.5C0.67,10.5,0,11.17,0,12s0.67,1.5,1.5,1.5h17.38l-7.94,7.94c-0.59,0.59-0.59,1.54,0,2.12
                                                C11.23,23.85,11.62,24,12,24s0.77-0.15,1.06-0.44l10.5-10.5C23.7,12.92,23.81,12.76,23.89,12.57z"
        />
      </svg>
    </span>
  );
}

export default ArrowLogo;
