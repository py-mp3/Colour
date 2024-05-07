import { useState } from "react";

export function RandomNumberGen(){
    const [number, setNumber] = useState(0)

    async function getRandomNumber() {


        let response = await fetch("http://localhost:3000/randomNumber");
        let data = await response.json();
        console.log(data)
        setNumber(data.number)
    }

    return(
        <div>
            <h1>{number}</h1>    
            <button onClick={getRandomNumber}>get number </button>
        </div>
    )
}
export function RandomColourGen(){
    const [colour, setColour] = useState(0)

    async function getRandomColour() {


        let response = await fetch("http://localhost:3000/randomColour");
        let data = await response.json();
        console.log(data)
        setColour(data.colour)
    }

    return(
        <div>
            <h1  style = {{color: colour}}>{colour}</h1>    
            <button onClick={getRandomColour}>get number </button>
        </div>
    )
}