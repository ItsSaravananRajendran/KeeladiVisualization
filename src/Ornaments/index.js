import React, { useState } from "react";


import PageComponent from "../Components/PageComponent";
import { SubTitle, Text } from "../Home/Content";


const Pottery = props => {

    return <PageComponent title="Ornaments">
        <SubTitle>Gold ornaments</SubTitle>
        <Text>
            Few pieces of gold ornament like a star pendant, a small bell pattern like pendant, a broken bit of a small curved ring, a flake of an un-identified gold ornament were found.
        </Text>
        <img src="https://i.imgur.com/JbAssHA.png" width="100%" />

        <SubTitle>Ear ornaments</SubTitle>
        <Text>
            Totally 14 ear ornaments
            were unearthed. More than half size of a terracotta Ear ornament has a centrally depressed
            groove around the circumference on one side containing a Trident like pattern
            resembling the Tamil letter “La”(ழ) in a group of three lines besides the minute pointed
            holes spread around the three leaves like trident motive along with the minute dot like
            design of pre-firing nature
        </Text>
        <img src="https://i.imgur.com/JJXDBa2.png" width="100%" />
        <SubTitle>Bangles</SubTitle>
        <Text>
            Totally 23 bangle pieces were recovered. The bangle pieces were made of
            shell and glass with varying sizes. They are thick and thin in cross section. One
            piece decorated in outer portion of the shell bangle resembles two small lines going
            through all over the bangle
        </Text>
        <img src="https://i.imgur.com/rGphEzH.png" width="100%" />

    </PageComponent>
};

export default Pottery;