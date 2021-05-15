import React, { Component } from "react";
import Style from "./home.css";

import TitleCard from "../Components/TitleCard";
import ScrollDown from "../Components/ScrollDown";
import Content from "./Content";

class App extends Component {

    constructor(props) {
        super(props);
        this.content = React.createRef();
        this.node = null;
        ["scrollToContent"].forEach(method => this[method] = this[method].bind(this));
    }

    componentDidMount() {
        this.node = this.content.current;
    }

    scrollToContent() {
        this.node && this.node.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }


    render() {
        return (
            <React.Fragment>
                <div className={Style.imageContainer} >
                    <TitleCard />
                    <ScrollDown scrollToContent={this.scrollToContent} />
                </div>
                <Content nodeRef={this.content} />
            </React.Fragment>
        );
    }
}

export default App;