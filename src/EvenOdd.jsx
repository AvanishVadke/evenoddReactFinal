import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function EvenOdd() {
    const nav = useNavigate();
    const rNum = useRef();
    const [num, setNum] = useState("");
    const hNum = (event) => {setNum(event.target.value);}

    const check = (event) =>{
        event.preventDefault();
        if(num === "") {
            alert("Please enter a number");
            rNum.current.focus();
            return;
        }

        let n = parseInt(num);
        let r = n%2 === 0 ? "Even" : "odd";
        nav("/result", {state: {"res": r}});
    }

    return(
        <>
            <center>
                <NavBar/>
                <h1>Even Odd App</h1>
                <form onSubmit={check}>
                    <input type="number" placeholder="Enter a number" ref={ rNum} onChange={hNum} />
                    <br /><br />
                    <input type="submit" value="Find Even or Odd" />
                </form>
            </center>
        </>
    );
}

export default EvenOdd;