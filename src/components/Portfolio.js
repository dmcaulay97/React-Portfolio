import React from "react";
import "../css/portfolio.css"

function Portfolio({ linkHandler }) {
    return (
        <section className="container">
            <div className="row text-center">
                <h1 className="col-12 my-3 p-4 opaque">Portfolio</h1>

                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj1">
                        <div className="overlay" onClick={() => linkHandler("https://thawing-shore-81087.herokuapp.com/")}>
                            <h2>Vibez <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/Vibez")}>GitHub</span></h2>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj2">
                        <div className="overlay" onClick={() => linkHandler("https://dmcaulay97.github.io/Two-People/")}>
                            <h2>Pace Calculator <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/Two-People")}>GitHub</span></h2>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj3">
                        <div className="overlay" onClick={() => linkHandler("https://dmcaulay97.github.io/fun-finder/homePage")}>
                            <h2>Fun Finder <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/fun-finder")}>GitHub</span></h2>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 my-3">
                    <div className="projectImage" id="proj4">
                        <div className="overlay" onClick={() => linkHandler("https://fierce-plateau-09186.herokuapp.com/?id=610833b7c663010015b4551c")}>
                            <h2>Workout Tracker <span class="githubLink" onClick={() => linkHandler("https://github.com/dmcaulay97/workout-tracker")}>GitHub</span></h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;