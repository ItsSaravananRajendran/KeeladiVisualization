import React from "react";
import Style from "./content.css";

import TableauMap from "../../Components/TableauMap";

const Map = props => {
    const { height = "auto", width = "100%", backgroundColor = "bisque" } = props;
    return <div style={{ height, width, backgroundColor }} className={props.className}></div>
}


const TextAndMap = props => {
    const { text, ...rest } = props;
    return <div className={Style.textAndMap}>
        <div className={Style.text} >{text}</div>
        <TableauMap {...rest} />
    </div>
}

const Title = ({ children }) => <div className={Style.title}>{children}</div>

const Text = ({ children }) => <p className={Style.content}>{children}</p>

const SubTitle = ({ children }) => <div className={Style.subtitle}>{children}</div>

const Bold = ({ children }) => <div className={Style.bold}>{children}</div>

const Content = props => {
    const { nodeRef } = props;
    return <div ref={nodeRef} className={Style.container}>
        <div className={Style.italic}>
            The Keeladi excavation which is the  country's most sensational archeological project have yielded interesting findings that may alter the history of the earliest Indians. Keeladi excavation site is a cultural mound at Southern TamilNadu near River Vaigai.
        </div>
        <Title>Keeladi</Title>
        <div className={Style.keeladi}> The site of Keeladi is situated on the same ancient trade route leading from Madurai linking Alagankulam and further to Ramesvaram. The site of Keealdi is located about 12 kms south of Madurai the ancient captical of the Pandyas dynasty. The Keeladi mound is located on the south bank of River vaigai and is surrounded by village Kondagai and Manalur and is present 1 km to the southeast of present Keeladi Village.  The site of Keeladi is situated on the same ancient trade route leading from Madurai linking Alagankulam and further to Ramesvaram. The site of Keealdi is located about 12 kms south of Madurai the ancient captical of the Pandyas dynasty. The Keeladi mound is located on the south bank of River vaigai and is surrounded by village Kondagai and Manalur and is present 1 km to the southeast of present Keeladi Village. The site of Keeladi is situated on the same ancient trade route leading from Madurai linking Alagankulam and further to Ramesvaram. The site of Keealdi is located about 12 kms south of Madurai the ancient captical of the Pandyas dynasty. The Keeladi mound is located on the south bank of River vaigai and is surrounded by village Kondagai and Manalur and is present 1 km to the southeast of present Keeladi Village. The site of Keeladi is situated on the same ancient trade route leading from Madurai linking Alagankulam and further to Ramesvaram. The site of Keealdi is located about 12 kms south of Madurai the ancient captical of the Pandyas dynasty. The Keeladi mound is located on the south bank of River vaigai and is surrounded by village Kondagai and Manalur and is present 1 km to the southeast of present Keeladi Village.</div>
        <TableauMap className={Style.map1} height={625} width="100%"
            url="https://public.tableau.com/views/Book2-p3/Sheet1?:language=en&:display_count=y&:origin=viz_share_link"
        />
        <Title>Vaigai River Valley</Title>
        <TextAndMap text="It serves as one of the major culture zones of tamilnadu. The entire Vaigai river valley having a length of 260 km from its origin in the Veḷḷimalai in the west and its confluence with Bay of Bengal in the east and covering 10,580 sq.km area extending upto 20 km on either side of the river banks is taken up for intensive investigations to understand the cultural process through the ages."
        />
        <Text>
            Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.
            <br />
            <br />
            These glorious mentions of the vaiagi river in the Sangam literature has instigated the archeological excavations around the river valley.
        </Text>
        <Title>Historical background</Title>
        <Text>
            Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.
        </Text>
        <SubTitle>Sangam age</SubTitle>
        <Text>
            Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.
        </Text>
        <Map height={256} />
        <TextAndMap
            text="Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai."
        />
        <TextAndMap text="Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai." />
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>
        <Title>Archeological Background</Title>
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>
        <SubTitle>Previous and Present Archeological excavations</SubTitle>
        <TextAndMap
            text="Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai."
            url="https://public.tableau.com/views/Book1-p3/Sheet3?:language=en&:display_count=y&:origin=viz_share_link"
        />
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>
        <Title>Key Findings</Title>
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>
        <Title>Cultural Sequence</Title>
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>
        <SubTitle>Carbon dating</SubTitle>
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>
        <Map height={328} />
        <Text>Paripadal is one of the latter day Sangam works. It originally contained 70 poems, out of which only 22 are available today. These lines are from poem no. 10 singing the praise of River Vaigai that flows through Madurai. After the rains, fresh floods flow in Vaigai. It is a day of revelry for young men and women. The poem details about the festive spirit on the banks of Vaigai.</Text>

    </div >
}


export default Content;