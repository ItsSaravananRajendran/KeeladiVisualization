import React from "react";
import Style from "./content.css";
import { Link } from 'react-router-dom';

import TableauMap from "../../Components/TableauMap";

const Map = props => {
    const { height = "auto", width = "100%", backgroundColor = "bisque" } = props;
    return <div style={{ height, width, backgroundColor }} className={props.className}></div>
}


const TextAndMap = props => {
    const { text, image, left, ...rest } = props;
    return <div className={Style.textAndMap}>
        {left ?
            <React.Fragment>
                <img  {...rest} />
                <div className={image ? Style.imageText : Style.text} >{text}</div>
            </React.Fragment>
            :
            <React.Fragment>
                <div className={image ? Style.imageText : Style.text} >{text}</div>
                {image ? <img  {...rest} /> : <TableauMap {...rest} />}
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
}

const Content = props => {
    const { nodeRef } = props;
    return <div ref={nodeRef} className={Style.container}>
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
            Keeladi falls into the Vaigai River Valley area due to its close proximity to Vaigai river. The entire Vaigai river valley having a length of 260 km from its origin from the Western Ghats and its confluence with Bay of Bengal in the east and covering 10,580 sq.km area extending upto 20 km on either side of the river banks. Sangam Literature lauds River Vaigai as the lifeline of the legendary Pandya Kingdom. Due to its mentions in literature, this area had been taken up for intensive investigations to understand its cultural process through the ages.
        </Text>
        <TextAndMap
            text="Vaigai River Valley serves as one of the major culture zones of TamilNadu. This map s````````````hows potential places for archeological suvey around Vaigai River Valley ."
            url="https://public.tableau.com/views/vaigairivervalley/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            height={477}
        />

        <Text>
            Lets look into the history that led to a lot of explorations and excavations around this area.
            </Text>
        <Title>Historical background</Title>
        <Text>
            The history of Keeladi is strongly linked to the history of Madurai becouse of its proximity. Madurai is an ancient city that was inhabitated from Pre-Historic times. It served as the capital of Pandyas, one of the dynasties that ruled southern TamilNadu for centuries. It is also well
            known as a prominent centre for learning from very early times.  During the glorious rule of Pandyas,
            Madurai had overseas connections for both commercial and cultural activities.
        </Text>
        <SubTitle>Sangam age</SubTitle>
        <Text>
            The term
            Sangam can be rendered into English as an assembly, a college or an academy of learned people, held
            under the patronage of the Pandyan kings, who were great lovers of literature and the fine arts. The Sangam
            was a voluntary of organization of poets. Historians regard the Sangam period as the ‘Classical age’ age of Tamils from 300BCE to 300 CE. It is named after the famous Sangam academies of poets and scholars centered in the city of Madurai. The precious Sangam literature finds of this period discovered from various places in South India provide us
            the major source of information about Sangam age. Most of the Sangam literature speaks about the massive size of Madurai City.  There is a separate set of poems called Madhuraikanchi that describes the grandeur of Madurai City.
        </Text>
        <Map height={256} />
        <TextAndMap
            text="During the Sangam age three major dynasties were ruling over South India Chera , Chola and Pandya.  Its during the Pandyas rule Sangam Literature flourished. This map shows the important ports and capitals of the dynasties."
        />
        <TextAndMap text="From the Iron Age period the whole of the
            Vaigai river valley was brimming with both internal and external trade activities. There
            were various trade routes branched through this valley connecting the Chera region on
            the west and the Pandya country on the east upto Ramesvaram.  The site of Keeladi is situated on the same
            ancient trade route leading from Madurai linking Alagankulam and further to
            Ramesvaram." />
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
            Iron age – Early historic period, it did not provide a full or clear picture about its
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
        <SubTitle>Carbon dating</SubTitle>
        <Text>
            The six carbon samples collected by the Department of Archaeology, Government
            of Tamil Nadu, from the fourth season (2018) of excavations at Keeladi were sent
            to Beta Analytic Lab, Florida, USA for AMS (Accelerator mass Spectrometry)  dating and the reports have been received.
            The dates of all six samples fall between the 6th century BCE and 3rd century BCE. As there is a
            considerable deposit below the dated layer and also above the layers, the Keeladi
            cultural deposit could be safely dated between 6th century BCE and 1st century CE.
        </Text>
        <Map height={328} />
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
    </div >
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