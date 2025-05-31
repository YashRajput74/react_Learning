import MovingDot from "./MovingDot";
import Card from "./Card";
import MakeList from "./MakeList";
import ArtistList from "./ArtistList";
import Form from "./Form";
import RedundantDorm from "./RedundantDorm";
import './App.css'
import ScoreGame from "./ScoreGame";
import TaskApp from "./TaskApp";
import StopWatch from "./StopWatch";
import FormUseEffect from "./FormUseEffect";
import CounterUseEffect from "./CounterUseEffect";

export default function App() {
    return (
        <>
            <Card />
            <MovingDot />
            <MakeList />
            <ArtistList />
            <Form />
            <RedundantDorm />
            <ScoreGame />
            <TaskApp />
            <StopWatch />
            <FormUseEffect />
            <CounterUseEffect />
        </>

    )
}