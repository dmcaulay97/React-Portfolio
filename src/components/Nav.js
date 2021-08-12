import React from "react";
import "../css/nav.css"

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">DM</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" onClick={() => props.setPage("about")} href="#">About Me</a>
            <a className="nav-link" href="#" onClick={() => props.setPage("portfolio")}>Portfolio</a>
            <a className="nav-link" onClick={() => props.setPage("contact")} href="#">Contact</a>
            <a className="nav-link" href="#">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
