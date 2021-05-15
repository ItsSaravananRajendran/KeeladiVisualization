import React from "react";
import Style from "./scrollDown.css"

import DownArrow from "../Icons/DownArrow";


const ScrollDown = props => {
    const { scrollToContent } = props;

    return <div className={Style.downArrow} onClick={scrollToContent}>
        <DownArrow height={68} width={68} />
    </div>
}

export default ScrollDown;