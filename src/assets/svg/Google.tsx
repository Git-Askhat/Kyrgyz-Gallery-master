import * as React from "react"
import { SVGProps } from "react"

const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.074 13.389H28v-.056H16v5.334h7.535C22.435 21.77 19.482 24 16 24a8 8 0 0 1 0-16c2.04 0 3.895.77 5.307 2.026l3.771-3.771A13.272 13.272 0 0 0 16 2.667C8.636 2.667 2.666 8.637 2.666 16S8.636 29.333 16 29.333c7.363 0 13.333-5.97 13.333-13.333 0-.894-.092-1.767-.26-2.611Z"
      fill="#FFC107"
    />
    <path
      d="m4.204 9.794 4.38 3.213A7.997 7.997 0 0 1 16 8c2.039 0 3.894.77 5.307 2.026l3.771-3.771A13.272 13.272 0 0 0 16 2.667c-5.122 0-9.563 2.891-11.796 7.127Z"
      fill="#FF3D00"
    />
    <path
      d="M16 29.333c3.444 0 6.574-1.318 8.94-3.461l-4.127-3.492A7.94 7.94 0 0 1 16 24c-3.468 0-6.412-2.211-7.522-5.297l-4.348 3.35c2.207 4.318 6.688 7.28 11.87 7.28Z"
      fill="#4CAF50"
    />
    <path
      d="M29.074 13.389H28v-.056H16v5.334h7.535a8.027 8.027 0 0 1-2.724 3.714l.002-.002 4.126 3.492c-.292.266 4.394-3.204 4.394-9.871 0-.894-.092-1.767-.259-2.611Z"
      fill="#1976D2"
    />
  </svg>
)

export default SvgGoogle