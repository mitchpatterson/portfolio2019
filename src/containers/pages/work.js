import React, { Component } from 'react';
import { WorkItem } from "../../components";
// import PropTypes from "prop-types";

import { Explor, FotoScope } from "../../media";

export class WorkContainer extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    projects() {
        return [{
            title: "Explor",
            skills: "Javascript | HTML | CSS",
            href: "http://mitchpatterson.github.io/nomadApp/",
            description: "Searching for new grounds to explore but can’t decide where to go next? Explor is here to help you find that perfect destination. We’ll start by asking you some questions and show you the best destinations based on your answers. Pack your bags, its time to Explor!",
            svg: <Explor />
        }, {
            title: "FotoScope",
            skills: "Angular | Ionic",
            href: "https://github.com/mitchpatterson/FotoScope",
            description: "An Ionic & Angular project based on inspiring photographers using the Flickr API.",
            svg: <FotoScope />
        }];
    }

    render() {
        return (
            <div className="mp_container__work">
                <div className="work_header">
                	<h6>Projects</h6>
                    <div className="work_projects">
                        {this.projects().map((project, index) => {
                            return <WorkItem key={`project_${index}`} project={project} />;
                        })}
                    </div>
                </div>
			</div>
        );
    }
}