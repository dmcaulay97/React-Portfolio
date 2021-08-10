import React from "react";
import img from "../../public/profile-pic.JPG";


function About() {
    return (
        <section className="container">
            <div className="row">
                <img src={img} alt="background" />
                <h1 className="col-12">Hello World!</h1>
                <div className="col-12">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
        </section>
    );
}

export default About;