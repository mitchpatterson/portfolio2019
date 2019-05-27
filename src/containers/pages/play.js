import React, { Component } from 'react';
import { Mapper } from "../../components";
// import PropTypes from "prop-types";

export class PlayContainer extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mp_container__play">
                <div className="play_header">
                    <h1>MY HUMBLE BUT GROWING MAP OF COUNTRIES VISITED.</h1>
                </div>
                <div className="play_map">
            	   <Mapper />
                </div>
			</div>
        );
    }
}
