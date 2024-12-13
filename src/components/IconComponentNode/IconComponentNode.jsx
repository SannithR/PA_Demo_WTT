import React from "react";

export const IconComponentNode = ({ className }) => {
  return (
    <svg
      className={`icon-component-node ${className}`}
      fill="none"
      height="96"
      viewBox="0 0 96 96"
      width="96"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask className="mask" height="96" id="mask0_60_1414" maskUnits="userSpaceOnUse" width="96" x="0" y="0">
        <rect className="rect" fill="#EAECF0" height="96" rx="4.51306" width="96" />
      </mask>
      <g className="g" mask="url(#mask0_60_1414)">
        <rect
          className="rect"
          fill="url(#pattern0_60_1414)"
          height="126.162"
          stroke="#98A2B3"
          strokeWidth="0.713461"
          width="102.487"
          x="-5.40331"
          y="-1.0827"
        />
      </g>
      <defs className="defs">
        <pattern className="pattern" height="1" id="pattern0_60_1414" patternContentUnits="objectBoundingBox" width="1">
          <use
            className="use"
            transform="matrix(0.00157127 0 0 0.00127088 -0.00346932 -0.11074)"
            xlinkHref="#image0_60_1414"
          />
        </pattern>
        <image
          className="image-4"
          height="1440"
          id="image0_60_1414"
          width="1080"
        />
      </defs>
    </svg>
  );
};