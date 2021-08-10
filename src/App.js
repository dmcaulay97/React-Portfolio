import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer"
import "./css/app.css"

function App() {
  return (

    <div id="background" style={{ height: "100%" }}>
      <div id="overlay" style={{ height: "100%" }}>
        <Nav />
        <About />
        <Footer />
      </div>
    </div>
  )
}

export default App;
