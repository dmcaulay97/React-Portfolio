import React from "react";
import "../css/portfolio.css"

function Portfolio() {
    return (
        <section className="container">
            <div className="row text-center">
                <h1 className="col-12 my-3 p-4 opaque">Portfolio</h1>
                <div className="projectContainer col-sm-6 col-xxl-3 my-3">
                    <div className="projectImage">
                        <div className="overlay">
                            <h2>Project Title</h2>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 col-xxl-3 my-3">
                    <div className="projectImage">
                        <div className="overlay">
                            <h2>Project Title</h2>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 col-xxl-3 my-3">
                    <div className="projectImage">
                        <div className="overlay">
                            <h2>Project Title</h2>
                        </div>
                    </div>
                </div>
                <div className="projectContainer col-sm-6 col-xxl-3 my-3">
                    <div className="projectImage">
                        <div className="overlay">
                            <h2>Project Title</h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;