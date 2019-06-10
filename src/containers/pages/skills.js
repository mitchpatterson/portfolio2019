import React, { Component } from 'react';
// import PropTypes from "prop-types";

import { Skill } from "../../components";

export class SkillsContainer extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    skills() {
        return [{
            label: "HTML5",
            level: 5,
            years: "5 years"
        }, {
            label: "CSS 🖤SCSS",
            level: 5
        }, {
            label: "Javascript",
            level: 5
        }, {
            label: "React",
            level: 4
        }, {
            label: "Redux",
            level: 4
        }, {
            label: "Node.js",
            level: 3
        }, {
            label: "Webpack",
            level: 3
        }, {
            label: "Angular",
            level: 2
        }]
    }

    render() {
        return (
            <div className="mp_container__skills">
                <div className="skills_header">
                	<h6>Experience</h6>
                    <div className="skills">
                        {this.skills().map((skill, index) => {
                            return <Skill key={`skill_${index}`} skill={skill} />;
                        })}
                    </div>
                </div>
			</div>
        );
    }
}