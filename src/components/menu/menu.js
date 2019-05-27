import React, { Component } from "react";
import PropTypes from "prop-types";

import { Slideout } from "./index";

export class Menu extends Component {
    static propTypes = {
        onToggle: PropTypes.func,
        onSelectItem: PropTypes.func
    };

    static defaultProps = {
    	onToggle: () => null,
        onSelectItem: () => null
    };

    constructor() {
    	super();

    	this.state = {
    		closed: false
    	};

        this._onToggle = this._onToggle.bind(this);
        this._onSelectItem = this._onSelectItem.bind(this);
    }

    _onToggle(e) {
        this.setState({closed: !this.state.closed});
        this.props.onToggle();
    }

    _onSelectItem(e) {
        this.props.onSelectItem(e);
        this._onToggle();
    }

    render() {
        return (
            <div className={`mp_component__menu ${this.state.closed ? "closed" : "open"}`}>
                <div className="clickable_menu" onClick={this._onToggle}>
                	<div className="menu_bar" />
                	<div className="menu_bar" />
                	<div className="menu_bar" />
                </div>
                <Slideout open={!this.state.closed} onSelect={this._onSelectItem} />
            </div>
        );
    }
}
