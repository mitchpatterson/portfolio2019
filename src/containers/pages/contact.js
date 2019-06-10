import React, { Component } from 'react';
// import PropTypes from "prop-types";

import { Linkedin, Instagram, Github, Link } from "../../components";

export class ContactContainer extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mp_container__contact">
                <h6>Contact</h6>
                <div className="social_media_links">
                    <Link href="https://ca.linkedin.com/in/mitchpatterson">
                        <Linkedin />
                    </Link>
                    <Link href="https://www.instagram.com/patterson.mitch/">
                        <Instagram />
                    </Link>
                    <Link href="https://github.com/mitchpatterson">
                        <Github />
                    </Link>
                </div>
                <p>{`${String.fromCharCode(169)} Mitchell Patterson 2019`}</p>
			</div>
        );
    }
}
