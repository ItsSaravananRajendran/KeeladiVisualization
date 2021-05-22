import React from "react";
import Style from "./games.css";

import PageComponent from "../Components/PageComponent";
import { Alert, Text, TextAndMap } from "../Home/Content";

const TilteText = ({ title, text }) => {
    return <div className={Style.titleText}>
        <div className={Style.title}>{title}</div>
        <Text>
            {text}
        </Text>
    </div>
}

const Games = props => {

    return <PageComponent title="Games and Pastimes">
        <Text>
            The occurrence
            of artefacts such
            as dice,hop scotches
            and gamesmen, really
            reflects the pastime
            activities of the
            ancient
            people. the existence
            of these game objects posturizes the games and pastime activities
            of not only of the children, but also
            of the elders of the
            ancient society.
        </Text>
        <TextAndMap
            text={<TilteText
                title="Hopscotches"
                text="Keeladi
                    yielded 600 hop scotches. Even now
                    the same game is
                    prevalent in Madurai
                    and other regions
                    known as Pandi
                    or Nondivilayattu. They were used
                    by children as game pieces. These
                    are of various sizes as well as of different pot sherds like that of black and red ware,
                    coarse red ware and red were etc., "
            />}
            src="https://i.imgur.com/jhDJOV4.png"
            width="50%"
            left
        />
        <TextAndMap
            text=" "
            src="https://i.imgur.com/Q9GnrNm.png"
            width="50%"
            left
        />

        <TextAndMap
            text={<TilteText
                title="Dices"
                text="Dices were also recovered from the site. The adults would have used the dices to play a lot of games. The Dices found in Keeladi were similar to the ones found in the places where Indus-Saraswati civilisation flourished.  "
            />}
            src="https://i.imgur.com/q15MyQM.png"
            width="50%"
            left
        />
        <TextAndMap
            text={<TilteText
                title="Games men"
                text="Apart from
                    these, 80 chessmen
                    of similar shape but
                    in different sizes were
                    collected from the
                    excavation. These objects were used to play anceint games like chess"
            />}
            src="https://i.imgur.com/hUZOqba.png"
            width="50%"
            left
        />

    </PageComponent>
};

export default Games;