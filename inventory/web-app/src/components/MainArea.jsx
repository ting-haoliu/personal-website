import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

import '../styles/MainStyles.css'

function MainArea() {
    return (
        <main id="main" className="main">
            <Home />
            <About />
            <Project />
            <Contact />
        </main>
    );
}

export default MainArea;