import React, { useState } from "react";
import Style from "./pottery.css";

import PageComponent from "../Components/PageComponent";
import { Title, SubTitle, Text, Image } from "../Home/Content";

const MapDetails = {
    blackAndRed: `Black and red ware is the diagnostic pottery variety found in
    enormous amount from many of the Iron Age – Early historic sites in Tamil Nadu. At
    Keeladi this variety occurs throughout the periods with much concentration in the mid
    and lower levels. In the upper level it occurs in a degenerated form as an associated
    variety with coarse red ware. In the mid level the pot sherds were of medium fabric. At
    the lower level it was found in profuse quantity and remained as sort of ‘table ware’.
    Fashioned in fast wheel, with well levigated clay made it retained thin sections in
    evenly fired conditions. The shapes in this ware comprised of deep, shallow bowls
    with a featureless or sharpened rim, medium sized carinated jars, pots, dishes, plates,
    cups, miniature vessels etc. One of the characteristic feature found with this ware at the
    lower level was the presence of painted designs on the exterior. The painting was made
    with some natural white colour very lightly applied around the neck portion. There are
    few instances where the designs found to be executed even upto the carination of pots.
    The occurrence of paintings only in selective shapes like small to medium sized bowls
    and pots indicate its importance as a deluxe variety. The dot and dash pattern was the
    most preferred used in this ware to produce different design
    `,
    coarseRed: `The coarse red ware accounts for more than 60% of the total ceramic
    assemblage found throughout the lifespan of the site. The bulk of this ware comes from
    the upper and mid level of the cultural deposit. It was fabricated both in slow and fast
    wheel and in most of the cases retained core in dull grey colour. The shapes were
    mostly utilitarian in character consisting of wide mouthed storage vessels, big to small
    pots, basins with or without spouts, small to medium carinated vases, corrugated
    bowls with a flat or rounded base, dish‐on stands, miniature vessels, lids, finials,
    spouts, etc. The decorative pattern noticed in this ware consisted of incised, thumb
    impression, combed designs, finger nail impressions, criss‐cross lines, leaf, herring
    bone pattern and other appliqué designs.`,
    redPolished: `The red polished ware formed was found in limited quantity and
    majority of them came from the upper levels. With fine to medium fabric, some of the
    storage vessels had decoration on its exterior. The shapes in this ware included
    medium sized storage vessels, pots etc.The site yielded some rare specimens of this
    ware in the form of lustrous globular pot with spouts on the exterior. These pots are
    rarely seen and definitely brought to the site from elsewhere.`,
    blackWare: `Black ware formed a very meagre amount among the pottery repertoire
    confined to ring stands, lids, small plates, dishes and some miniature forms ranging
    from medium to fine fabric. Some specimens were found to retain traces of slip also.`,
    rouletted: `Rouletted ware was the distinct intrusive pottery found at Keeladi.
    This pottery is characteristic type of early historic period in Tamil Nadu. The
    occurrence of this ware at any given site assumes importance for maintaining external
    trade contacts especially with the western world. On contrary a strong indigenous
    origin of this ware is also advocated. The distinct shape found in this ware is the thin
    sectioned shallow dish, fabricated with fine levigated clay fired in sophisticated
    condition to produce a metallic sound. It has incurved and beaked rim with smooth
    surface. The inner base of the dish normally decorated concentric bands or circles
    resulted by rouletting or chattering pattern . The site of Keeladi
    evinced three varieties such as greyish pink with grey slip on inside and brown to
    sepia on the outside, greyish pink with black slip inside and brown outside and grey
    with black slip inside and outside . Though this ware started to occur in
    upper level, a majority of the sherds were collected coeval with structural level. The
    upper level contained both fine and imitated rouletted sherds fashioned in plain black
    and black and red ware. More than two hundred roulette sherds were collected from
    both levels of the site .`
}

const PotteryImage = props => {
    const [text, setText] = useState("Click on the potsherds to know more about them");

    const setContext = (key) => {
        setText(MapDetails[key]);
    }

    return <div className={Style.imageContainer}>
        <img src="https://i.imgur.com/mIluhMS.jpg" useMap="#image-map" width={402} height={536} />

        <map name="image-map">
            <area target="_" alt="Blackware" title="Blackware" href="" coords="252.96147403685092, 487.7420435510888, 273.1624790619765, 465.74539363484087, 292.24120603015075, 444.6465661641541, 299.64824120603015, 432.9748743718593, 304.3618090452261, 430.28140703517585, 319.4003350083752, 445.5443886097152, 328.82747068676713, 454.5226130653266, 345.66164154103853, 467.54103852596313, 352.17085427135675, 475.6214405360134, 349.25293132328306, 483.47738693467335, 332.8676716917923, 499.86264656616413, 325.0117252931323, 509.73869346733665, 309.52428810720266, 523.430485762144, 303.46398659966496, 528.5929648241206, 296.50586264656613, 534.2043551088777, 274.95812395309883, 515.3500837520938, 253.85929648241205, 494.251256281407 "
                shape="poly"
                onClick={(e) => { setContext("blackWare"); e.preventDefault() }} />
            <area target="#" alt="Rouletted" title="Rouletted" href="" coords="3.591289782244556,452.27805695142376,45.11557788944724,475.6214405360134,54.54271356783919,480.78391959798995,72.27470686767168,492.45561139028473,91.12897822445561,507.04522613065325,101.90284757118927,514.003350083752,118.06365159128978,511.08542713567834,130.857621440536,506.1474036850921,132.2043551088777,467.7654941373534,135.12227805695142,456.99162479061977,128.38860971524286,422.64991624790616,112.45226130653266,432.9748743718593,101.67839195979899,439.03517587939695,96.06700167504187,441.05527638190955,87.31323283082077,415.24288107202676,161.15912897822446,410.5293132328308,186.9715242881072,408.73366834170855,191.2361809045226,404.9179229480737,147.69179229480736,351.4974874371859,129.28643216080403,327.7051926298157,97.1892797319933,325.2361809045226,82.15075376884421,354.8643216080402,33.44388609715243,412.3249581239531,8.753768844221105,447.1155778894472"
                shape="poly"
                onClick={(e) => { setContext("rouletted"); e.preventDefault() }}
            />
            <area target="#" alt="RedPolished" title="RedPolished" href="" coords="251.6147403685092,342.29480737018423,278.1005025125628,380.0033500837521,296.05695142378556,396.61306532663315,302.56616415410383,393.69514237855947,304.81072026800666,383.8190954773869,311.09547738693465,364.7403685092127,320.2981574539363,346.78391959798995,321.64489112227807,309.52428810720266,321.1959798994975,302.7906197654941,311.9932998324958,295.3835845896147,300.77051926298157,295.8324958123953,295.15912897822443,295.3835845896147,278.3249581239531,309.52428810720266,259.91959798994975,329.50083752093803"
                shape="poly"
                onClick={(e) => { setContext("redPolished"); e.preventDefault() }} />
            <area target="#" alt="BlackAndRed1" title="BlackAndRed1" href="" coords="67.56113902847571,113.79899497487436,50.72696817420435,142.7537688442211,33.892797319932995,162.95477386934672,22.67001675041876,177.76884422110552,26.036850921273032,184.05360134003348,35.688442211055275,196.17420435510888,50.72696817420435,206.0502512562814,60.60301507537688,212.1105527638191,73.6214405360134,197.96984924623115,84.84422110552764,177.31993299832496,92.92462311557789,160.93467336683418,100.33165829145729,140.95812395309883,90.00670016750418,124.57286432160804,76.98827470686767,112.22780569514238"
                shape="poly"
                onClick={(e) => { setContext("blackAndRed"); e.preventDefault() }} />
            <area target="#" alt="BlackAndRed2" title="BlackAndRed2" href="" coords="69.1323283082077,63.2964824120603,88.21105527638191,80.13065326633165,107.51423785594639,99.20938023450586,121.87939698492463,109.53433835845895,137.36683417085428,104.37185929648241,145.6716917922948,93.59798994974874,142.97822445561138,79.00837520938023,142.52931323283082,62.17420435510888,131.75544388609714,46.23785594639866,119.63484087102177,34.56616415410385,107.96314907872696,25.363484087102176,101.22948073701842,23.792294807370183,89.55778894472361,35.01507537688442"
                shape="poly"
                onClick={(e) => { setContext("blackAndRed"); e.preventDefault() }} />
            <area target="#" alt="CoarseRed1" title="CoarseRed1" href="" coords="179.11557788944722,164.75041876046902,191.68509212730316,195.7252931323283,206.49916247906197,224.68006700167504,214.57956448911222,236.80067001675042,224.45561139028476,235.00502512562812,235.67839195979897,232.08710217755444,246.45226130653265,231.18927973199328,256.77721943048573,231.18927973199328,270.24455611390283,231.18927973199328,281.0184254606365,232.536013400335,290.4455611390285,230.29145728643215,289.09882747068673,216.82412060301507,286.18090452261305,204.92797319932998,282.8140703517588,187.19597989949747,276.7537688442211,174.62646566164153,265.5309882747069,167.21943048576213,250.71691792294806,160.03685092127301,242.18760469011724,156.89447236180905,209.41708542713567,158.24120603015075,199.09212730318256,159.58793969849245"
                shape="poly"
                onClick={(e) => { setContext("coarseRed"); e.preventDefault() }} />
            <area target="#" alt="CoarseRed2" title="CoarseRed2" href="" coords="302.56616415410383,13.69179229480737,297.8525963149079,27.159128978224455,301.6683417085427,45.34003350083752,301.6683417085427,59.03182579564489,303.91289782244553,73.39698492462311,305.93299832495813,90.45561139028476,308.17755443886097,106.16750418760469,318.9514237855946,107.28978224455611,338.03015075376885,106.61641541038526,347.4572864321608,106.84087102177554,364.7403685092127,107.73869346733667,367.6582914572864,87.53768844221105,369.00502512562815,63.2964824120603,371.249581239531,37.03517587939698,371.249581239531,19.30318257956449,360.7001675041876,11.671691792294807,335.3366834170854,11.222780569514237,327.7051926298157,10.773869346733669"
                shape="poly"
                onClick={(e) => { setContext("coarseRed"); e.preventDefault() }} />

        </map>
        <Text className={Style.text}>{text}</Text>
    </div>
}

const Pottery = props => {

    return <PageComponent title="Pottery">
        <Text>
            Potteries represent one of the most useful archaeological artifacts in reconstructing human activity in the past. Being part of daily use, potteries can support the interpretation of dynamics related to trade, manufacture routines, cultural identity and artistic traditions. The pottery found from the excavations by and large displayed indigenous character with minimal intrusion of external ceramic varieties.
        </Text>
        <PotteryImage />
        <SubTitle>Trade and commerce through pottery</SubTitle>
        <Text>
            By analysing the potsherds recovered from the excavation site helps in tracing down the trade relations of ancient Tamil Nadu.  Major portion of potsherds recovered from Keeladi are black and red ware and coarse red ware which are common ware that are made locally. But the red polished ware that was found in Keeladi has origins in India as well as Persian Gulf inferring that the ceramic type had  been imported. Rouletted ware has its origin from Mediterranean region and Egypt.
        </Text>
        <img src="https://i.imgur.com/utMJErf.png" width="100%" />

    </PageComponent>
};

export default Pottery;