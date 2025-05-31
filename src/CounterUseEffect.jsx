import { useEffect, useState } from "react"

export default function CounterUseEffect() {
    const [showCounter, setShowCounter] = useState(false);
    function handleShow() {
        setShowCounter(!showCounter);
    }
    return (
        <>
            <button onClick={handleShow}>{showCounter ? 'Hide' : 'Show'} Counter</button>
            {showCounter && <Counter />}
        </>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        function onTick() {
            setCount(count => count + 1);
        }
        const interval = setInterval(onTick, 1000);
        return () => clearInterval(interval);
    }, [])
    return (
        <h1>{count}</h1>
    )
}