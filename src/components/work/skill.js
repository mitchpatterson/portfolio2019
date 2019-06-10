import React, { Component } from 'react';
import PropTypes from "prop-types";

export class Skill extends Component {
    static propTypes = {
        skill: PropTypes.shape({
            label: PropTypes.string,
            level: PropTypes.number
        })
    };

    constructor(props) {
        super(props);
    }

    skillString(level) {
        switch(level) {
            case 1:
                return "Beginner";
            case 2:
                return "Novice";
            case 3:
                return "Intermediate";
            case 4:
                return "Advanced";
            case 5:
                return "Expert";
        }
    }

    render() {
        const { skill } = this.props;
        const { label, level, years } = skill;

        return (
            <div className="mp_component__skill">
            	<span>{label}</span>
                <div className="skill_wrap">
                    <div className="skill_bar">
                        <div className={`skill_string level_${level}`}>{this.skillString(level)}</div>
                        <div className={`skill_years level_${level}`}>{years}</div>
                        <div className={`skill_end level_${level}`} />
                        <div className={`skill_level level_${level}`} />
                    </div>
                </div>
            </div>
        );
    }
}
