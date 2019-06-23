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
            level: 5,
            years: "5 years"
        }, {
            label: "Javascript",
            level: 5,
            years: "5 years"
        }, {
            label: "React",
            level: 4,
            years: "3 years"
        }, {
            label: "Redux",
            level: 4,
            years: "3 years"
        }, {
            label: "Vue.js",
            level: 1,
            years: "<1 years"
        }, {
            label: "Angular",
            level: 2,
            years: "1 year"
        }, {
            label: "Node.js",
            level: 3,
            years: "2 years"
        }, {
            label: "Webpack",
            level: 3,
            years: "3 years"
        }, {
            label: "Git",
            level: 4,
            years: "4 years"
        }, {
            label: "Zenhub",
            level: 5,
            years: "1 year"
        }, {
            label: "Jira",
            level: 2,
            years: "<1 year"
        }]
    }

    render() {
        return (
            <div className={`mp_container__skills`}>
                <div className="skills_header">
                	<h6>Experience & Skills</h6>
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