import React from "react";

import PageComponent from "../Components/PageComponent";
import { SubTitle, Text, Row } from "../Home/Content";

import Style from "./sturcturalRemain.css";

const StructuralRemains = props => {

    return <PageComponent title="Structural  Remains">
        <Text>
            The architectural remains at Keeladi display exemplary engineering skills of that
            period. It seems that the layout of the structures were conceived methodologically,
            well planned and executed over a period of time. All most all the structures at Keeladi
            share a common pattern in their orientation. Irrespective of the size, they have
            purposefully been set in north‐south orientation originating from south and ending in
            north. The reason behind this particular orientation requires further investigation. On
            average the structures started occurring a depth of 1.00 meter from the present ground
            level.
        </Text>
        <SubTitle>RingWells</SubTitle>
        <Text>
            Ringwells are an indicator of the advanced water conservation technology of that period. Ring wells were built as rows of pots, or ceramic rings arranged one on top of the other. Ring wells were used as drains and garbage dumps. Ringwells were dicovered in the first two seasons and fourth seaon of excavation.  The ringwells were placed submerged in the soil. The placement of rings beneath the natural soil suggests that the well was constructed
            during the summer season when the water table shall be low and subsequently remain
            submerged within water during rainy season.
        </Text>
        <br />
        <Row>
            <img src="https://i.imgur.com/b4nwwp0.png" width="49%" />
            <img src="https://i.imgur.com/ANFlGR3.png" width="49%" />
        </Row>
        <SubTitle>Other Structures</SubTitle>
        <Row>
            <img src="https://i.imgur.com/JZhSbTQ.png" width="49%" />
            <img src="https://i.imgur.com/Tp3lQ0S.png" width="49%" />
        </Row>
        <Row className={Style.row}>
            <img src="https://i.imgur.com/fJYX2K0.png" width="49%" />
            <img src="https://i.imgur.com/6vwEPc0.png" width="49%" />
        </Row>


    </PageComponent>
};

export default StructuralRemains;
