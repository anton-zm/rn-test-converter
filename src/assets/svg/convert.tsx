import React from 'react'
import Svg, { Path } from "react-native-svg"


export const Convert = ({color}:{color?:string}) => (
  <Svg
    width={24}
    height={24}
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8v2.787c0 1.079-1.354 1.62-2.146.857L0 6 5.854.358C6.646-.406 8 .135 8 1.215V4h10a2 2 0 0 1 0 4H8Zm8 5.216c0-1.08 1.354-1.621 2.146-.857L24 18l-5.854 5.643c-.792.763-2.146.223-2.146-.857V20H6a2 2 0 0 1 0-4h10v-2.785Z"
      fill={color || 'white'}
    />
  </Svg>
)
