/* export default function ScoreGame() {
    return (
        <div>hello world!</div>
    )
} */

import { useState } from 'react';

export default function ScoreGame() {
    const [scores, setScores] = useState({
        Taylor: 0,
        Sarah: 0
    });
    const [isPlayerA, setIsPlayerA] = useState(true);
    const [winner, setWinner] = useState(null);

    const currentPlayer = isPlayerA ? "Taylor" : "Sarah";

    function handleAddRandomScore(name) {
        if (winner) return;

        const randomScore = Math.floor(Math.random() * 5) + 1;
        setScores(prev => {
            const updated = {
                ...prev,
                [name]: prev[name] + randomScore
            };

            if (updated[name] >= 20) {
                setWinner(name);
            }

            return updated;
        });

        setIsPlayerA(!isPlayerA);
    }

    return (
        <div className="scoreboard">
            <h2>Scoreboard</h2>
            <Counter
                name="Taylor"
                score={scores.Taylor}
                active={currentPlayer === "Taylor"}
                onScore={() => handleAddRandomScore("Taylor")}
            />
            <Counter
                name="Sarah"
                score={scores.Sarah}
                active={currentPlayer === "Sarah"}
                onScore={() => handleAddRandomScore("Sarah")}
            />
            {winner && <h3> {winner} wins!</h3>}
        </div>
    );
}

function Counter({ name, score, active, onScore }) {
    return (
        <div className={`counter ${active ? 'active' : ''}`}>
            <h3>{name}'s Score: {score}</h3>
            <button onClick={onScore} disabled={!active}>
                Add Random (1-5)
            </button>
        </div>
    );
}
