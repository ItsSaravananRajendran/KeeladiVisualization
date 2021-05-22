import React, { useState } from "react";
import Style from "./semiPrecious.css";

import PageComponent from "../Components/PageComponent";
import { Title, SubTitle, Text, Row } from "../Home/Content";

const ImageWithDesc = props => {
    const { desc, ...rest } = props;
    return <div className={Style.imageContainer}>
        <img {...rest} />
        {desc}
    </div>
}

const Pottery = props => {

    return <PageComponent title="Semi precious stones">
        <Text>
            The collection of beads from Keeladi excavation accounts to 2301, which include glass beads, paste beads, quartz beads, faience beads, agate bead, cornelian bead,
            terracotta beads. Glass and paste beads of various colours. The shapes of the beads
            are spherical, cylindrical, gooseberry, and barrel.
        </Text>

        <Row Style={{ marginTop: "24px" }}>
            <img src="https://i.imgur.com/VKld2aP.png" width="50%" />
            <div style={{ width: "50%" }}>
                <Row className={Style.row}>
                    <ImageWithDesc src="https://i.imgur.com/wJuGqAT.png" desc="Carnelian bead" />
                    <ImageWithDesc src="https://i.imgur.com/ckg5VAU.png" desc=" Quartz bead" />
                </Row>

                <Row className={Style.row}>
                    <ImageWithDesc src="https://i.imgur.com/DwEkQ7i.png" desc="Soapstone bead" />
                    <ImageWithDesc src="https://i.imgur.com/sB8kfXc.png" desc="Terracotta bead" />
                </Row>
                <Row className={Style.row}>
                    <ImageWithDesc src="https://i.imgur.com/ewaVUCm.png" desc="Crystal bead" />
                    <ImageWithDesc src="https://i.imgur.com/XxjZDQZ.png" desc="Glass bead" />
                </Row>
            </div>
        </Row>

    </PageComponent>
};

export default Pottery;