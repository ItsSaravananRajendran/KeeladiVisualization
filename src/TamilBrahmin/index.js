import React, { useState } from "react";
import Style from "./tamilBrahmin.css";

import PageComponent from "../Components/PageComponent";
import { Alert, Text, TextAndMap } from "../Home/Content";


const TamilBrahmin = props => {

    return <PageComponent title="Tamili-Brahmi script">
        <Text>
            The Brahmi script is one of the earliest desciphered scripts in India. The scholars called the Tamili (Tamil-Brahmi)
            script as Damili or ancient Tamil script.
            Tamil-Brahmi letters as part of inscriptions are found engraved on the shoulder
            portions of the earthen vessels. In general, these letters were inscribed when the
            pot is in leather condition or were inscribed /engraved after the pot became dry. The
            letters engraved in leather condition could be made only by the potters at the time of making pots. In the case of Keeladi examples, they were all post-firing in nature and
            were engraved by the owners after purchasing the pots.
        </Text>
        <TextAndMap
            text="Tamil – Brahmi Inscribed Black and Red Ware Dish ‘ce n ta n a va (ta) thi’"
            src="https://i.imgur.com/h0ayIIr.png"
            width="50%"
            left
        />
        <TextAndMap
            text="Tamil – Brahmi Inscribed Potsherd ‘va se i y pe ru mu va r u n……’"
            src="https://i.imgur.com/4svykHy.png"
            width="50%"
            left
        />

        <Alert className={Style.alert}>These Tamili-Brahmi  script could be dated back to 6th century BCE, likely a hundred years before previously thought</Alert>
        <center>
            <img src="https://i.imgur.com/wduWskU.png" />
        </center>

    </PageComponent>
};

export default TamilBrahmin;