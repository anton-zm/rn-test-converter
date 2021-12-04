import React from 'react'
import Svg, { SvgProps, Path } from "react-native-svg"

export const Clock = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.628 0 12 0Zm0 6a1 1 0 0 0-1 1v5H8a1 1 0 0 0 0 2h5V7a1 1 0 0 0-1-1Zm-9 6a9 9 0 1 0 18.001-.001A9 9 0 0 0 3 12Z"
      fill="#fff"
    />
  </Svg>
)
