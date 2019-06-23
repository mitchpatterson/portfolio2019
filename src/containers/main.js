import React from "react";

import {
	LandingContainer,
	ContactContainer,
	WorkContainer,
	SkillsContainer
} from "./index";
import { Menu } from "../components";

export class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="mp_container__main">
				<LandingContainer />
				<WorkContainer />
				<SkillsContainer />
				<ContactContainer />
			</div>
		);
	}
}
