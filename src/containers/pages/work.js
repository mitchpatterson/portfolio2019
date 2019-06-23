import React, { Component } from 'react';
import { WorkItem } from "../../components";
// import PropTypes from "prop-types";

import { Explor, FotoScope, D3, Calendeer, Snowman } from "../../media";

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
            description: `Searching for new grounds to explore but can${String.fromCharCode(39)}t decide where to go next? Explor is here to help you find that perfect destination. We${String.fromCharCode(39)}ll start by asking you some questions and show you the best destinations based on your answers. Pack your bags, it${String.fromCharCode(39)}s time to Explor!`,
            svg: <Explor />
        }, {
            title: "FotoScope",
            skills: "Angular | Ionic",
            href: "https://github.com/mitchpatterson/FotoScope",
            description: "An Ionic & Angular project based on inspiring photographers using the Flickr API.",
            svg: <FotoScope />
        }, {
            title: "Calendeer",
            skills: "React | Jest | Unsplash API",
            href: "https://mitchpatterson.github.io/calendeer/",
            description: "Calendeer is an photo inspired application that grabs the latest animal (by default, but you can choose whatever category you want) photos based on your keyword search and creates a desktop calendar.",
            svg: <Calendeer />
        }, {
            title: "D3 Experiments",
            skills: "D3 | React",
            href: "https://mitchpatterson.github.io/experiment_d3/",
            description: "Ongoing experiment and creation of latest d3 capabilities.. expect more soon!",
            svg: <D3 />
        }, {
            title: "Save That Snowman!",
            skills: "Javascript | Canvas | create.js",
            href: "http://mitchpatterson.github.io/snowHangman/",
            description: "HTML canvas game powered by create.js. Inspired by the classic hangman game - and it being christmas at the time of development",
            svg: <Snowman />
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