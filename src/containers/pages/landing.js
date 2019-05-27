import React, { Component } from 'react';
import { Mapper } from "../../components";
import { Logo } from "../../media";
// import PropTypes from "prop-types";

import { Linkedin, Instagram, Github, Link } from "../../components";

export class LandingContainer extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mp_container__landing">
                <div className="name">
                	<h1>MITCHELL</h1>
                    <h1>PATTERSON</h1>
                </div>
                <div className="descriptor">
                    <p>front end development wizard. (aspiring) world traveller. fantasy league couch coacher extraordinaire.</p>
                </div>
                <div className="logo_wrapper"><Logo /></div>
                <div className="scroll_tag" />
                <div className="scroll_text"><h5>SCROLL</h5></div>
			</div>
        );
    }
}
