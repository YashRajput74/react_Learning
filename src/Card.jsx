import { tasksData } from "./data"
import Button from "./Button"
import { useState } from "react"

export default function Card(){
    const [index,setIndex]=useState(0);
    function handleNextClick(){
        setIndex((index) => (index + 1) % tasksData.length);
    }
    function handlePreviousClick(){
        setIndex((index) =>
            (index - 1 + tasksData.length) % tasksData.length
        );
    }
    return (
        <>
            <Button classGiven="nextButton" label="Next" onHit={handleNextClick}/>
            <Button classGiven="previousButton" label="Previous" onHit={handlePreviousClick}/>
            <div className="list">
                <h3>{tasksData[index].text}</h3>
                <p>{tasksData[index].status}</p>
            </div>
        </>
    )
}