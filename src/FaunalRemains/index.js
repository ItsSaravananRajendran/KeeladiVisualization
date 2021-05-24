import React, { useState } from "react";
import Style from "./faunal.css";

import PageComponent from "../Components/PageComponent";
import { SubTitle, Text, Row } from "../Home/Content";


const Pottery = props => {

    return <PageComponent title="Faunal Remains">
        <Text>
            The total
            number of animal skeletal
            fragments is of 70 samples. the species such as Cow/
            Ox , Buffalo,
            Sheep, Goat, Nilgai,
            Blackbuck, Wild boar and Peacock were
            identified.
            If we, put the ox, cow,
            buffalo and goat together
            it occupies almost 53%,
            there by indicating that they were predominantly
            cattle raising people.
        </Text>
        <img src="https://i.imgur.com/MR9Zqkt.png" width="60%"  />
        <Row className={Style.row}>
            <div width="30%" >
                <img src="https://i.imgur.com/QPwNQSg.png" />
            </div>
            <div><img src="https://i.imgur.com/vdkHjry.png" style={{ marginLeft: "24px" }} /> </div>
            <div><img src="https://i.imgur.com/Y9q99vO.png" style={{ marginLeft: "24px" }} /></div>
            <div><img src="https://i.imgur.com/B1ya4mG.png" style={{ marginLeft: "24px" }} /></div>

        </Row>

    </PageComponent>
};

export default Pottery;
