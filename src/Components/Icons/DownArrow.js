import React from "react";

const DownArrow = (props) => {
    return (
        <svg width={68} height={68} viewBox="0 0 68 68" fill="none" {...props}>
            <g
                clipPath="url(#clip0)"
                stroke="#F7F6F6"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M36.833 65.106C54.046 65.106 68 51.153 68 33.94S54.046 2.773 36.833 2.773c-17.212 0-31.166 13.954-31.166 31.167S19.62 65.106 36.833 65.106z" />
                <path d="M24.367 33.94l12.467 12.466L49.3 33.94M36.834 21.473v24.933" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <path fill="#fff" d="M0 0H68V68H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default DownArrow;
