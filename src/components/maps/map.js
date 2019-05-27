import React, { Component } from 'react';

import { World } from "../../media";

export class Mapper extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.countriesVisited = ["CA", "US", "CL", "BS", "NL", "NO", "ES", "BO", "PE", "EC", "CO", "DO"];
    }

    componentDidMount() {
    	const countries = document.querySelectorAll(".land");
    	countries.forEach((country) => {
    		if (this.countriesVisited.includes(country.id)) {
    			country.classList.add("visited");
    		}
    	})
    }

    render() {
        return (
            <div className="mp_component__map">
            	<World />
            </div>
        );
    }
}
