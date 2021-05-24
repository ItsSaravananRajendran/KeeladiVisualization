import React, { useState } from "react";
import Style from "./content.css";
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';

import TableauMap from "../../Components/TableauMap";
import MapBox from "../MapBox";


const Map = props => {
    const { height = "auto", width = "100%", backgroundColor = "bisque" } = props;
    return <div style={{ height, width, backgroundColor }} className={props.className}></div>
}


const TextAndMap = props => {
    const { text, image, left, mapBox, ...rest } = props;
    return <div className={Style.textAndMap}>
        {left ?
            <React.Fragment>
                <img  {...rest} />
                <div className={image ? Style.imageText : Style.text} >{text}</div>
            </React.Fragment>
            :
            <React.Fragment>
                <div className={image ? Style.imageText : Style.text} >{text}</div>
                {image ? <img  {...rest} /> : mapBox ? <MapBox {...rest} /> : <TableauMap {...rest} />}
            </React.Fragment>}
    </div>
}

const Title = ({ children }) => <div className={Style.title}>{children}</div>

const Text = ({ children, className = "" }) => <p className={`${Style.content} ${className}`}>{children}</p>

const SubTitle = ({ children }) => <div className={Style.subtitle}>{children}</div>

const Bold = ({ children }) => <div className={Style.bold}>{children}</div>

const HighLight = ({ children }) => <div className={Style.highlight} >{children}</div>

const MonoChrome = ({ children }) => <div className={Style.monochrome}>{children}</div>

const Alert = ({ children, className }) => <div className={`${Style.orange} ${className}`}>{children}</div>

const Row = ({ children, className = "" }) => {
    return <div className={`${Style.row} ${className}`}  >{children}</div>
};

const ImageLink = props => {
    const { src, desc, link } = props;
    return <div className={Style.imageLink}>
        <Link to={link}>
            <img src={src} width={"100%"} />
            {desc}
        </Link>
    </div>
}

const ImageCluster = props => {
    return <div className={Style.imageCluster}>
        <Row>
            <ImageLink src="https://i.imgur.com/6nsq0Ct.png" desc="Pottery" link="/pottery" />
            <ImageLink src="https://i.imgur.com/P1F3EPC.png" desc="Tamili Brahmi script" link="/tamil-script" />
            <ImageLink src="https://i.imgur.com/wb7ajlH.png" desc="Ornaments" link="/ornaments" />
        </Row>
        <Row>
            <ImageLink src="https://i.imgur.com/gPixfwa.png" desc="Semi-Precious stones" link="/semi-precious" />
            <ImageLink src="https://i.imgur.com/U0BPAKy.png" desc="Faunal remains" link="/faunal" />
            <ImageLink src="https://i.imgur.com/yKdCFs3.png" desc="Games and Pastime" link="/games" />
        </Row>
        <Row>
            <ImageLink src="https://i.imgur.com/TtmPaEp.png" desc="Terracotta Figurines" link="/terracotta" />
            <ImageLink src="https://i.imgur.com/FMTYBph.png" desc="Structural remains" link="/structural-remains" />
        </Row>
    </div>
};


const Area = props => {
    const { width, height, cW, cH, coords, ...rest } = props;
    const strCoords = coords.split(",");
    const intCoords = [];
    for (let I = 0; I < strCoords.length; I++) {
        let coord = +strCoords[I];
        let coordDup = 0;
        if (I % 2 === 0)
            coordDup = (coord * width / cW);
        else
            coordDup = (coord * height / cH);
        intCoords.push(coordDup);
    }
    return <area {...rest} coords={intCoords.join(",")} />
}

const TimeLine = props => {
    const { src, height, width, useMap, children } = props;
    return <div>
        <img src={src} height={height} width={width} useMap={`#${useMap}`} />
        <map name={useMap}>
            {children}
        </map>
    </div>
};

const PopUp = props => {
    const { children, style } = props;
    return <div className={Style.popup} style={style}>
        {children}
    </div>
};


const HoverText = ({ text, hover, ...rest }) => {
    return <span className={Style.red} data-hover={hover} {...rest} >{text}</span>
}


const hoverMap = {
    "300": "Greek ethnographer Megasthenes describes Pandyan dysnasty's capital Madurai",
    "350": "Asoka's inscription recording the four Kingdoms Cheras, Cholas,Pandya and Satyaputra of the ancient Tamil country",
    "1": "Greek historian Nicolaus of Damascus met an ambassador sent by Pandyan King to Caesar Augustus, Strabo XV.1-73",
    "bar1": "The Periplus of the Erythraean Sea gives a detailed description of early Chera and Pandya kingdom and mentions a part of the Tamil country as Lymirike",
    "bar2": "Greco-Roman writers Pliny the Elder and Ptolemy mention Madurai ruled by Pandyan.",
    "sangam": "Sangam Age during which sangam literature was created",
    "postSangam": "Tamil epics such as Silappatikaram was written",
    "period1": `Period I
    Represented by finer variety of Black and Red ware, black ware, and associated red
    slipped ware of finer verity and of polish. Structural remains like terracotta ring wells, brick structure constitute the building activity of the phase.`,
    "period2": `Period II
    Similar ceramic types as the lower level but of medium fabric and fineness, roof tile besides antiquities like terracotta ear ornaments, gamesmen of terracotta, semiprecious stone beads along with beads of paste belong to the
    this phase. Copper coin,  a silver punch marked coin
    having punch mark constitute the sequence of cultural deposit of this period. There were also ivory objects such as cubical dice like gamesmen, arrow points of bone used for hunting animals, hop-scotches made of terracotta and potsherds, iron objects like
    broken portions of spear head etc., found.`,
    "period3": `Period III
    Ceramic tiles of red slipped ware, red ware, glass beads from the upper level of the
    deposit represent this period.`,
    "period12": "Sangam Age during which sangam literature are created",
    "period13": "Tamil epics such as Silappatikaram was written",
    "sangamLiterature": "Sangam Literature is the earliest writings in the Tamil language, thought to have produced in 3 Sangams in Madurai from 1st to 4th century CE. The Sangam literature was composed by 473 poets, some 102 are anonymous ",
    "pandyaKingdom": "Pandya dynasty are the Tamil rulers in the extreme south of India with Madurai as their capital. They ruled from pre-historic times until end of the 15th century",
    "preHistoric": "Pre-Historic period is from 2,500,000 BCE - 300 BCE",
    "madhuraikanchi": `Maduraikanchi is an ancient Tamil poem in the Sangam literature. It is an informative  poem and its title implies the "poetic counsel addressed to the king of Madurai"`,
    "chera": `The kingdom of the Cheras comprised the modern Western Tamil Nadu and Kerala, along the western or Malabar Coast of southern India. Chera rulers dated to the first few centuries AD`,
    "chola": `The Chola dynasty was an empire in southern India, one of the longest ruling dynasties in the world history. The earliest datable reference to Chola is from 3rd century BCE and they ruled over various territories until 13th century CE `,
    "ironAgePeriod": `Iron Age period in Tamilnadu is from  1500 BCE-200BCE`,
    "earlyHistoricPeriod": `Tentatively dated between 300 BCE and 300 CE, yet to be determined scientifically.`,
};

const Content = props => {
    const { nodeRef } = props;
    const [popUpText, setpopUpText] = useState("");
    const [popUpStyle, setStyle] = useState({});
    const preventDefault = e => e.preventDefault();
    const screenWidth = window.innerWidth - 320;


    const throttledFunc = debounce((eve, e) => {
        if (eve === "in") {
            const key = e.target.dataset.hover;
            const text = hoverMap[key] || "";
            const left = e.pageX - 100;
            const top = e.pageY;
            setpopUpText(text);
            text && setStyle({ top, left });
        } else {
            setpopUpText("");
            setStyle({});
        }
    }, 250);
    const onEnter = e => {
        throttledFunc("in", e);
    };

    const onExit = e => {
        throttledFunc("out", e);
    };




    return <React.Fragment>
        <div ref={nodeRef} className={Style.container}>
            {popUpText && <PopUp style={popUpStyle}>
                {popUpText}
            </PopUp>}
            <div className={Style.italic}>
                The Keeladi excavation which is the  country's most sensational archeological project has yielded interesting findings that may alter the history of the earliest Indians. About seven seasons of exacavation have been conducted in this place from 2015-2021. This data story is designed to explain the historical  background of Keeladi,  its important findings that uncovered an ancient urban civilisation in South India.
                This project includes findings and inferences upto 4th phase of excavation.
        </div>
            <Title>Keeladi</Title>
            <div className={Style.keeladi}>
                Keeladi is a small, peaceful village filled with coconut groves located just 2.5 kms from River Vaigai .  It is at a drivable distance of 12 kms from Madurai City in TamilNadu. River Vaigai, once a perenial river, has now become a seasonal river in South India which flows from Western Ghats and drains into the Bay of Bengal near Alagankulam an early historic port city.
                People have been living in Keeladi for centuries and the primary occupation there is agriculture. Since Keeladi is so close to Madurai city which is called the “Athens of South India”, it invited a lot of attention from historians and archeologists.
            <br />
                <br />
                <div>
                    Lets learn a little more about how they discovered an urban civilization lying underneath the village.
            </div>
                <br />
                <Alert>*Hover over the places to get more information.</Alert>

            </div>
            <TableauMap className={Style.map1} height={625} width="100%"
                url="https://public.tableau.com/views/Book2-p3/Sheet1?:language=en&:display_count=y&:origin=viz_share_link"
            />
            <Text>Lets look into the history that led to a lot of explorations and excavations around this area.</Text>
            <Title>Vaigai River Valley</Title>
            <Text>
                Keeladi falls into the Vaigai River Valley area due to its close proximity to Vaigai river. The entire Vaigai river valley having a length of 260 km from its origin from the Western Ghats and its confluence with Bay of Bengal in the east and covering 10,580 sq.km area extending upto 20 km on either side of the river banks.
            <HoverText
                    text=" Sangam Literature "
                    hover="sangamLiterature"
                    onMouseOver={onEnter}
                    onMouseOut={onExit} /> lauds River Vaigai as the lifeline of the legendary
                <HoverText
                    text=" Pandya Kingdom."
                    hover="pandyaKingdom"
                    onMouseOver={onEnter}
                    onMouseOut={onExit} /> Due to its mentions in literature, this area had been taken up for intensive investigations to understand its cultural process through the ages.
        </Text>
            <TextAndMap
                text={<div>
                    <div>Vaigai River Valley serves as one of the major culture zones of TamilNadu.</div>
                    <div>This map shows potential places for archeological suvey around Vaigai River Valley.</div>
                </div>}
                url="https://public.tableau.com/views/vaigairivervalley/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
                height={477}
            />

            <Text>
                Lets look into the history that led to a lot of explorations and excavations around this area.
            </Text>
            <Title>Historical background</Title>
            <Text>
                The history of Keeladi is strongly linked to the history of Madurai becouse of its proximity. Madurai is an ancient city that was inhabitated from
            <HoverText
                    text=" Pre-Historic "
                    hover="preHistoric"
                    onMouseOver={onEnter}
                    onMouseOut={onExit} />
            times. It served as the capital of Pandyas, one of the dynasties that ruled southern TamilNadu for centuries. It is also well
            known as a prominent centre for learning from very early times.  During the glorious rule of Pandyas,
            Madurai had overseas connections for both commercial and cultural activities.
        </Text>
            <SubTitle>Sangam age</SubTitle>
            <Text>
                The term
                Sangam can be rendered into English as an assembly, a college or an academy of learned people, held
                under the patronage of the Pandyan kings, who were great lovers of literature and the fine arts. The Sangam
                was a voluntary of organization of poets. Historians regard the Sangam period as the ‘Classical age’ age of Tamils from 300BCE to 300 CE. It is named after the famous Sangam academies of poets and scholars centered in the city of Madurai. The precious Sangam literature finds of this period discovered from various places in South India provide us
                the major source of information about Sangam age. Most of the Sangam literature speaks about the massive size of Madurai City.  There is a separate set of poems called
            <HoverText
                    text=" Madhuraikanchi "
                    hover="madhuraikanchi"
                    onMouseOver={onEnter}
                    onMouseOut={onExit} />
             that describes the grandeur of Madurai City.
        </Text>
            <TimeLine src="https://i.imgur.com/NcAYUwJ.png" height={235} width={screenWidth} useMap="timeLine">
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target=""
                    data-hover="preSangam"
                    alt="preSangam"
                    title="preSangam"
                    href=""
                    coords="51,141,51,155,333,156,333,137" shape="poly"
                    cW={990} cH={235} height={235} width={screenWidth} />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target="" data-hover="sangam" title="sangam" href="" coords="341,143,718,154" shape="rect" cW={990} cH={235} height={235} width={screenWidth} />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target="" data-hover="postSangam" title="postSangam" href="" coords="726,142,850,155" shape="rect" cW={990} cH={235} height={235} width={screenWidth} />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target="" data-hover="300" title="300" href="" coords="337,102,12" shape="circle" cW={990} cH={235} height={235} width={screenWidth} />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target="" data-hover="350" title="350" href="" coords="373,101,9" shape="circle" cW={990} cH={235} height={235} width={screenWidth} />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target="" data-hover="1" title="1" href="" coords="530,102,11" shape="circle" cW={990} cH={235} height={235} width={screenWidth} />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target="" data-hover="bar1" title="bar1" href="" coords="530,80,593,88" shape="rect" cW={990} cH={235} height={235} width={screenWidth} />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    target="" data-hover="bar2" title="bar2" href="" coords="579,66,632,76" shape="rect" cW={990} cH={235} height={235} width={screenWidth} />
            </TimeLine>
            <TextAndMap
                text={<div>
                    During the Sangam age three major dynasties were ruling over South India
                <HoverText
                        text=" Chera "
                        hover="chera"
                        onMouseOver={onEnter}
                        onMouseOut={onExit} /> ,
                <HoverText
                        text=" Chola "
                        hover="chola"
                        onMouseOver={onEnter}
                        onMouseOut={onExit} /> and Pandya.  Its during the Pandyas rule Sangam Literature flourished. This map shows the important ports and capitals of the dynasties.
                </div>}
                image
                src="https://i.imgur.com/BKDUtYY.png"
                width="500px"
            />
            <TextAndMap text={<div>
                From the
            <HoverText
                    text=" Iron Age Period "
                    hover="ironAgePeriod"
                    onMouseOver={onEnter}
                    onMouseOut={onExit} /> the whole of the
            Vaigai river valley was brimming with both internal and external trade activities. There
            were various trade routes branched through this valley connecting the Chera region on
            the west and the Pandya country on the east upto Ramesvaram.  The site of Keeladi is situated on the same
            ancient trade route leading from Madurai linking Alagankulam and further to
            Ramesvaram.</div>}
                style={{
                    height: 500,
                    width: "500px",
                    marginLeft: "50px"
                }}
                width="500px"
                src='mapbox://styles/raaghavishan/ckoqylzfd6tyl17pbo0wbqrme'
                mapBox
            />
            <Text>
                These well known history has instigated the archeological explorations and excavation in this area.
        </Text>
            <Title>Archeological Background</Title>
            <Text>
                The beginning of archaeological investigations in the vaigai river valley could be traced back to
                the later part of the 19th century CE.
                Inspite of potent archaeological wealth, southern Tamil Nadu on the
                whole received very little attention in the form of dedicated exploration or excavation.
                The absence of any major excavation has prevented us from understanding the evolution and development of different cultures in a given geographical context.
                Though sporadic diggings made at some of the sites like  Alagankulam, Mangulam etc showed evidences of
                Iron age –
            <HoverText
                    text=" Early historic period "
                    hover="earlyHistoricPeriod"
                    onMouseOver={onEnter}
                    onMouseOut={onExit} />, it did not provide a full or clear picture about its
            transformation and various cultural aspects. Thus in order to have a better
            understanding of the cultural developments that took place at various stages of time, a
            problem-oriented archaeological survey was carried out in the Vaigai river valley in the
            year 2013 – 14 by Excavation Branch – VI, Bangalore.
        </Text>
            <SubTitle>Excavations and explorations</SubTitle>
            <Text>A seven-member team of archaeologists, an epigraphist and graduate students conducted explorations across 293 sites along the Vaigai river valley in Theni, Dindigul, Madurai, Sivaganga and Ramanathapuram districts. During the course of exploration, about 293 sites all along the Vaigai river valley with
            various forms of ancient remains such as urn burials, menhirs, inscriptions,
            sculptures, hero‐stones, habitation mounds etc have been identified.
        </Text>
            <Row className={Style.impFact}>
                <div className={Style.boldRed}>
                    116/340
            </div>
                <div className={Style.fact}>
                    were habitational sites which have potential for large scale excavations
            </div>
            </Row>
            <TextAndMap
                text="This map shows the 340 sites and its corresponding cultural periods. Keeladi on among the habitational site has been subjected to a large scale excavation."
                url="https://public.tableau.com/views/Book1-p3/Sheet3?:language=en&:display_count=y&:origin=viz_share_link"
                height={422}
            />
            <Text>Of a shortlist of 100 habitation sites, three were identified for a dig, all within 50km of Madurai. Keeladi emerged as the winner.</Text>
            <HighLight>“Keeladi is one in a 100”</HighLight>
            <Text>
                When the archeologists from ASI decided to conduct a river-focused archeological survey in Tamilnadu, they conducted a “human scanning excercise” where they went to villages and asked people living there if they had seen any old artefacts.
                In that excercise a retired history teacher told them that one of his students had found some artefacts. These comprised a “coin of Chola King Rajaraja I, few beads and terracotta figurines of 12-13th century AD,”. These were handed over to a tamil Epigraphist.
            <br />
            Then they were later led to a coconut grove by a local villager where he had seen a lot of broken pices of terracotta pots. In archeology these were termed as potsherds. When they dug up the place, Black and Red Ware potsherds were raked up around the area. Astonishingly, that dig had partially uncovered an elaborate 2000-year-old brick structure facing north-east.
            That is how the archaeologists got to a 110-acre mound, under which lay evidence of an urban settlement dating back to between 2300 to 2600 years ago.
        </Text>
            <TextAndMap
                text="When the ASI team began to dig around the central part of the mound at Keeladi, they found the site was once an Iron Age settlement that evolved and continued into the historic period. The first three metres from the top revealed brick structures from the early historic phase, and 1.5 metres below that was evidence from the Iron Age, where a large number of axes, daggers, spades, knives and forceps were found."
                image={true}
                width={"50%"}
                src="https://i.imgur.com/eOj9cDZ.png"
            />
            <Text>
                “We got lucky!” the chief archeologist of this study said. Madurai is believed to have been continuously inhabited since at least the third century BCE. “We came upon a mound right next to Madurai city, where archaeologists have never been able to dig.”
        </Text>
            <Title>Key Findings</Title>
            <Text>
                This exacavtion work had yielded a number of antiquities where in fourth season alone 5820 antiquities were found. Each and every important artefact had a story to tell about the richness of the society that habited the place in the past.
                Here take a look at some important Keeladi Findings.
        </Text>
            <ImageCluster />
            <Title>Cultural Sequence</Title>
            <Text>
                Based on the cuttings of the 4th season of the excavation revealed the cultural deposit
                of 2 distinct features of sequence with middle deposit continuation at the top.
                Based on the ceramics, tiles and minor antiquities, the chronology of the site could be
                of 3 stages and they are Period-I, II and III.
        </Text>
            <TimeLine height={145} width={screenWidth} src="https://i.imgur.com/fd5eNf4.png" useMap="timeline2">
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    cW={995}
                    cH={145}
                    height={145} width={screenWidth}
                    target="" data-hover="period1" target="" alt="" title="" href="" coords="59,46,335,62" shape="rect" />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    cW={995}
                    cH={145}
                    height={145} width={screenWidth}
                    target="" data-hover="period2" target="" alt="" title="" href="" coords="337,46,786,61" shape="rect" />
                <Area onClick={preventDefault}
                    onMouseOver={onEnter}
                    onMouseOut={onExit}
                    cW={995}
                    cH={145}
                    height={145} width={screenWidth}
                    target="" data-hover="period3" target="" alt="" title="" href="" coords="792,46,934,61" shape="rect" />
            </TimeLine>
            <SubTitle>Carbon dating</SubTitle>
            <Text>
                The six carbon samples collected by the Department of Archaeology, Government
                of Tamil Nadu, from the fourth season (2018) of excavations at Keeladi were sent
                to Beta Analytic Lab, Florida, USA for AMS (Accelerator mass Spectrometry)  dating and the reports have been received.
                The dates of all six samples fall between the 6th century BCE and 3rd century BCE. As there is a
                considerable deposit below the dated layer and also above the layers, the Keeladi
                cultural deposit could be safely dated between 6th century BCE and 1st century CE.
        </Text>
            <div className={Style.center}>
                <PopUp style={{ fontWeight: 400, padding: "32px 16px" }}>The dates of Sangam period have been moved further 3 centuries back to 6th century BCE. </PopUp>
            </div>
            <TimeLine height={256} width={screenWidth} src="https://i.imgur.com/s5vi4Hg.png" useMap="timeline3">
                <Area onMouseOver={onEnter}
                    onMouseOut={onExit}
                    cW={1012}
                    cH={256}
                    height={256} width={screenWidth}
                    target="" data-hover="period11"
                    target="" alt="" title="" href="" coords="102,163,178,177" shape="rect" />
                <Area onMouseOver={onEnter}
                    onMouseOut={onExit}
                    cW={1012}
                    cH={256}
                    height={256} width={screenWidth}
                    target="" data-hover="period12"
                    target="" alt="" title="" href="" coords="182,165,756,180" shape="rect" />
                <Area onMouseOver={onEnter}
                    onMouseOut={onExit}
                    cW={1012}
                    cH={256}
                    height={256} width={screenWidth}
                    target="" data-hover="period13"
                    target="" alt="" title="" href="" coords="758,164,884,177" shape="rect" />
            </TimeLine>
            <Text>
                Urban settlements are typically considered to be markers of how advanced a society is. The dominant view is that diverse technological innovations were necessary for the existence of settled communities. Until Keeladi was discovered, archaeologists by and large believed that the Gangetic plains in the north urbanised significantly earlier than South India.
            <br />
                <br />
            Historians have often claimed that large-scale town life in India first developed in the Greater Magadha region of the Gangetic basin. This was during the ‘second urbanisation’ phase, believed to have begun around the mid-first millennium BCE. (The ‘first urbanisation phase’ refers to the rise of the Harappan or Indus Valley Civilisation, lasting from 2600 BCE to 1900 BCE.)
            <br />
                <br />
            South India was thought to have urbanised at this scale only by the third century BCE. The findings at Keeladi push that date back significantly.
        </Text>
            <MonoChrome> “Now, it is arguable that southern  part of the subcontinent also urbanized around the same time as the Gangetic plains” </MonoChrome>
            <Text>
                The findings have also invited comparisons with the Indus Valley Civilisation. Subsequent phases of excavations had happened and and had unearthed a lot of artefacts that gives evidence of structural activities and their report is awaited. The Keeladi excavations have triggered a healthy debate on Indian civilisation and added value to the discipline of archaeology.
        </Text>
            <div className={Style.centerText}>Keeladi could well be a priceless piece in a massive geographic jigsaw puzzle</div>
            <SubTitle>Credits</SubTitle>
        </div >
        <div className={Style.credits}>
            <div><b>Desing</b> : S.Raaghavi </div>
            <br />
            <div><b>Code</b> : Saravanan Rajendran</div>
            <br />
            <br />
            <div><b>Guide</b> : Prof.Venkatesh Rajamanickam (Information Design lab)</div>
            <br />
            <br />
            <div className={Style.idc}>IDC School of Design, IIT Bombay</div>
        </div>
    </React.Fragment>
}


export default Content;

export {
    Text,
    Title,
    SubTitle,
    Row,
    TextAndMap,
    Alert
}