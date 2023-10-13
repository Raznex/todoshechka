import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#252727"
      d="M13.275 9.548 6.309 2.91a.625.625 0 0 0-.863 0l-.007.008a.575.575 0 0 0 0 .833l6.56 6.25-6.56 6.248a.575.575 0 0 0 0 .834l.007.007a.625.625 0 0 0 .863 0l6.966-6.637a.624.624 0 0 0 0-.905Z"
    />
  </svg>
);
export default SvgArrow;
