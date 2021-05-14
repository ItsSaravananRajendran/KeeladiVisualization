import React from "react";
import Style from "./scrollDown.css"

import DownArrow from "../Icons/DownArrow";


const ScrollDown = props => {
    return <div className={Style.downArrow}>
        <DownArrow height={68} width={68} />
        <div className={Style.scrollText}>Scroll down</div>
    </div>
}

export default ScrollDown;