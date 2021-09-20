import React from "react";
import "../css/footer.css"

function Footer({ linkHandler }) {
    return (
        <footer className="mt-auto">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => linkHandler("https://github.com/dmcaulay97")}>Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => linkHandler("https://www.linkedin.com/in/dylan-mcaulay-8a4693159/")}>LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => linkHandler("https://www.youtube.com/watch?v=Bfc5f7yUqY4")}>Third Thing</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;