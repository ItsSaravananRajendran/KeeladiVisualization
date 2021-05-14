import React, { Component } from "react";
import Style from "./home.css";

import TitleCard from "../Components/TitleCard";
import ScrollDown from "../Components/ScrollDown";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={Style.imageContainer} >
                    <TitleCard />
                    <ScrollDown />
                </div>
            </React.Fragment>

        );
    }
}

export default App;