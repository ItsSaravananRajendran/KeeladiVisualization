import React from "react";
import Style from "./pageComponent.css";

import { Title } from "../../Home/Content";
import LeftArrow from "../Icons/LeftArrow";

const PageComponent = props => {
    const { title, children } = props;
    return <div className={Style.container}>
        <LeftArrow className={Style.icon} onClick={() => window.history.back()} />
        <Title>{title}</Title>
        <div>
            {children}
        </div>
    </div>
};


export default PageComponent;