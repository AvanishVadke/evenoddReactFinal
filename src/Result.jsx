import { useLocation, Link } from "react-router-dom";

function Result() {
    const loc = useLocation();
    return (
        <>
            <div className="result-container">
                <h1 className="result-title">Result</h1>
                <h2 className="result-value">{loc.state.res}</h2>
                <Link to="/" className="result-home-link">
                    Go to Home
                </Link>
            </div>
        </>
    );
}

export default Result;
