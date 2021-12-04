import React from 'react'
import Svg, { Path } from "react-native-svg"

export const MenuIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
        >
            <Path
                d="M3 4h18M3 11h18M3 18h18M3 4h18M3 11h18M3 18h18"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}