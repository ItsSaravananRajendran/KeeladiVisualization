import React, { Component } from 'react';
import tableau from 'tableau-api';

import Style from './tableauMap.css';

class TableauMap extends Component {
    componentDidMount() {
        this.props.url && this.initViz()
    }


    initViz() {
        const { url } = this.props;
        const vizUrl = url;
        const vizContainer = this.vizContainer;
        let viz = new window.tableau.Viz(vizContainer, vizUrl)
    }


    render() {
        const { width, height } = this.props;
        if (!this.props.url) return null;
        return (
            <div className={Style.map}
                ref={(div) => { this.vizContainer = div }}
                style={{ width, height }}>
            </div>
        )
    }
}


export default TableauMap;