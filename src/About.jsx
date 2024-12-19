import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function About() {
    return(
        <>
            <center>
                <NavBar />
                <h2>About Me:</h2>
                    <p>
                        Hi, I'm Avanish! I'm passionate about coding and building projects that
                        solve real-world problems. I love learning new technologies and sharing
                        knowledge with others.
                    </p>
                <Link to= "/"> Home </Link>
            </center>
        </>
    );
}

export default About;