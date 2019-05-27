import React, { Component } from 'react';
import PropTypes from "prop-types";

import { Share, Link } from "../index";

export class WorkItem extends Component {
    static propTypes = {
        project: PropTypes.shape({
            title: PropTypes.string,
            skills: PropTypes.string,
            href: PropTypes.string
        })
    };

    static defaultProps = {
        project: {
            title: "Enter title",
            skills: "Tell me about..."
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { project } = this.props;
        return (
            <div className="mp_component__workItem">
            	<div className="content_shell">
                    <div className="project_svg">
                        {project.svg || null}
                    </div>
                    <div className="project_description">
                        {project.description}
                    </div>
            	</div>
                <div className="description_shell">
                    <h3>{project.title}</h3>
                    <p>{project.skills}</p>
                    <div className="share_link">
                        <Link href={project.href}>
                            <Share />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
