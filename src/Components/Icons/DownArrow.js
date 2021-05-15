import React from "react"

const DownArrow = (props) => {
    return (
        <svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
            <path
                d="M34.833 65.106C52.046 65.106 66 51.153 66 33.94S52.046 2.773 34.833 2.773c-17.212 0-31.166 13.954-31.166 31.167S17.62 65.106 34.833 65.106z"
                stroke="#F7F6F6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M22.367 33.94l12.467 12.466L47.3 33.94M34.834 21.473v24.933"
                stroke="#F7F6F6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default DownArrow;

