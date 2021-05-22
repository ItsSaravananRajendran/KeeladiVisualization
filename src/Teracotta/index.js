import React from "react";

import PageComponent from "../Components/PageComponent";
import { Text, Row, Alert } from "../Home/Content";
import Style from "./teracotta.css"


const Terracotta = props => {

    return <PageComponent title="Terracotta Figurines">
        <Text>
            Terracotta is the pioneering art specimens
            of mankind. This art made up of clay and burnt clay emerged first than that of
            stone, wood, ivory and metal. This craft
            doesn’t require much of technology of
            specialized tools for shaping the contours.
            Just the fingers are enough for its creation. They
            generally represent various forms of
            human and animal beings, besides
            gamesmen and children toy objects.
        </Text>
        <Row className={Style.margin}>
            <img src="https://i.imgur.com/8WrKxzG.png" width="30%" />
            <img src="https://i.imgur.com/qWI504g.png" width="30%" />
            <img src="https://i.imgur.com/p53bJoC.png" width="25%" height={242} style={{ marginTop: 28 }} />
        </Row>
        <Row className={Style.margin}>
            <img src="https://i.imgur.com/WBYkXJT.png" width="30%" />
            <img src="https://i.imgur.com/GGNLl7X.png" width="30%" />
        </Row>
        <Alert className={Style.alert}>The site has not yielded any objects of worship so far</Alert>

    </PageComponent>
};

export default Terracotta;