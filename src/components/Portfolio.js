import React from "react";
import "../css/portfolio.css"

function Portfolio({ linkHandler }) {
    return (
        <section className="container" id="portfolio">
            <h1 className="p-4 opaque text-center font-link">Portfolio</h1>
            <div className="row text-center">
                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj1">
                        <div className="overlay" onClick={() => linkHandler("https://thawing-shore-81087.herokuapp.com/")}>
                            <h2>Vibez <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/Vibez")}>GitHub</span></h2>
                            <div className="description">
                                A music playlist creation application powered by Youtube Music. Key Technologies: Third Party API's, Express, JavaScript, MVC Design Structure.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj2">
                        <div className="overlay" onClick={() => linkHandler("https://dmcaulay97.github.io/Pace-calculator/")}>
                            <h2>Pace Calculator <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/Pace-calculator")}>GitHub</span></h2>
                            <div className="description">
                                This application is designed to be used by runners looking to make pace calculations for races or training runs. Key Technologies: React, CSS, JavaScript
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj3">
                        <div className="overlay" onClick={() => linkHandler("https://github.com/dmcaulay97/readme-generator")}>
                            <h2>Readme Generator <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/readme-generator")}>GitHub</span></h2>
                            <div className="description">
                                A Readme generating command line application for programmers. Key Technologies: Inquirer, JavaScript, Node.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj4">
                        <div className="overlay" onClick={() => linkHandler("https://dmcaulay97.github.io/fun-finder/homePage")}>
                            <h2>Fun Finder <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/fun-finder")}>GitHub</span></h2>
                            <div className="description">
                                A live event search engine powered by the Ticketmaster API. Key Technologies: Third Party API's, Bootstrap, Javascript.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;