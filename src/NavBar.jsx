import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="nav">
                <Link to="/">
                    <img 
                        src="/home.png" 
                        alt="Home Icon" 
                        style={{ width: "24px", height: "24px", marginRight: "8px" }} 
                    />
                    Home
                </Link>
                <Link to="/about">
                    <img 
                        src="/about.png" 
                        alt="About Icon" 
                        style={{ width: "24px", height: "24px", marginRight: "8px" }} 
                    />
                    About
                </Link>
            </div>
        </>
    );
}

export default NavBar;
