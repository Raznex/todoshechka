import * as React from "react";
const SvgLope = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g strokeMiterlimit={10} strokeWidth={1.25}>
      <path
        stroke="#252727"
        d="M8.636 2.5a6.136 6.136 0 1 0 0 12.273 6.136 6.136 0 0 0 0-12.273Z"
      />
      <path stroke="#000" strokeLinecap="round" d="M13.214 13.214 17.5 17.5" />
    </g>
  </svg>
);
export default SvgLope;
