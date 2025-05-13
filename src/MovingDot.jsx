import { useState } from "react"

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });



    return (
        <div className="animationScreen" onPointerMove={e => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        }}>
            <div className="movingDot" style={
                {
                    color: "white",
                    position: "absolute",
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    top: 100,
                    left: 100,
                    border: "5px solid white",
                    borderRadius: "50%"
                }
            }>

            </div>
        </div>
    )
}