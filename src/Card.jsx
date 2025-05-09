import { tasksData } from "./data"
import Button from "./Button"
import { useState } from "react"

const FILTERS = ["all", "incomplete", "in-progress", "completed"];

export default function Card(){
    const [index,setIndex]=useState(0);
    const [filter, setFilter] = useState(0);

    const filteredData=tasksData.filter(task=>{
        if(FILTERS[filter]=="all"){
            return true;
        }
        return task.status==FILTERS[filter];
    });

    function handleNextClick(){
        if(filteredData.length==0){
            return;
        }
        setIndex((index) => (index + 1) % filteredData.length);
    }
    
    function handlePreviousClick(){
        if(filteredData.length==0){
            return;
        }
        setIndex((index) =>
            (index - 1 + filteredData.length) % filteredData.length
        );
    }

    function handleToggleClick(){
        setFilter(
            (f)=>(f+1)%FILTERS.length
        );
        setIndex(0);
    }

    return (
        <div className="card">
            <Button classGiven="nextButton" label="Next" onHit={handleNextClick}/>
            <Button classGiven="previousButton" label="Previous" onHit={handlePreviousClick}/>
            <Button classGiven="toggleButton" label={`Toggle: ${FILTERS[filter]}`} onHit={handleToggleClick}/>
            <div className="list">
                <h3>{filteredData[index].text}</h3>
                <p>{filteredData[index].status}</p>
            </div>
        </div>
    )
}