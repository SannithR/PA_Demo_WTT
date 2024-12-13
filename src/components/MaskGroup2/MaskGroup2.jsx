import React from "react";

export const MaskGroup2 = ({ className }) => {
  return (
    <svg
      className={`mask-group-2 ${className}`}
      fill="none"
      height="96"
      viewBox="0 0 96 96"
      width="96"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask className="mask" height="96" id="mask0_101_1072" maskUnits="userSpaceOnUse" width="96" x="0" y="0">
        <rect className="rect" fill="#EAECF0" height="96" rx="4.51306" width="96" />
      </mask>
      <g className="g" mask="url(#mask0_101_1072)">
        <rect
          className="rect"
          fill="url(#pattern0_101_1072)"
          height="126.162"
          stroke="#98A2B3"
          strokeWidth="0.713461"
          width="102.487"
          x="-5.40344"
          y="-1.0827"
        />
      </g>
      <defs className="defs">
        <pattern
          className="pattern"
          height="1"
          id="pattern0_101_1072"
          patternContentUnits="objectBoundingBox"
          width="1"
        >
          <use
            className="use"
            transform="matrix(0.00157127 0 0 0.00127088 -0.00346932 -0.11074)"
            xlinkHref="#image0_101_1072"
          />
        </pattern>
        <image
          className="image-4"
          height="1440"
          id="image0_101_1072"
          width="1080"
        />
      </defs>
    </svg>
  );
};