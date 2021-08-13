import React from "react";
import img1 from "../img/me.png";
import "../css/about.css";

function About() {
    return (
        <section className="container">
            <div className="row text-center">
                <h1 className="col-12 my-3 p-4 opaque">Hello World!</h1>
                {/* <img className="col-6" src={img1} alt="profile" style={{ width: "200px", height: "auto" }} /> */}
                <div className="col-md-12 col-lg-6 opaque py-3">
                    Hi, my name is Dylan McAulay, welcome to my website! I'm an Applied Mahematics and Physics major turned programmer. I earned my degrees from the University of Rochester in 2019 and towrds the end of my time in Rochester I discovered my passion for web development and computer science generally. I am currently enrolled in the University of Connecticut full stack development boot-camp and hope to break into the world of web development. On this site you can find links to web applications I have developed, my resume and my contact information.
                </div>
                <div className="col-md-12 col-lg-6 p">
                    <img src={img1} alt="me" id="me" />
                </div>
            </div>
        </section>
    );
}

export default About;