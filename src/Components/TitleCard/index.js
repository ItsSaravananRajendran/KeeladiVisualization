import React from "react";
import Style from "./titleCard.css";

const Titlecard = props => {
    return (
        <div className={Style.titleContainer}>
            <div>Keeladi</div>
            <div className={Style.titleBody}>Unearthing the Vaigai Valley Civilization</div>
            <div className={Style.divider} />
            <div className={Style.author}>By  S.Raaghavi</div>
        </div>
    )
}

export default Titlecard;
