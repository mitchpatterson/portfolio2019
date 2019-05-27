import React, { Component } from 'react';
import PropTypes from "prop-types";

export class MapPopover extends Component {
	static propTypes = {
		data: PropTypes.shape({
			country: PropTypes.string,
			highlights: PropTypes.array,
			code: PropTypes.string,
			when: PropTypes.string
		})
	};

    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="mp_component__map_popover">
            	<div className="popover_header"></div>
            	<div className="popover_content"></div>
            	<div className="popover_footer"></div>
            </div>
        );
    }
}
