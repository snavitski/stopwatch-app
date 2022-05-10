import { useEffect, useState } from "react";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";


const App = () => {

    const [time, setTime] = useState(0);
    const [timeOn, setStart] = useState(false);

    useEffect(() => {
        let interval = null;

        if(timeOn){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeOn]);
  return (
    <Container>
      <Stopwatch time={time}/>
      <Button setTime={setTime} setStart={setStart} />
    </Container>
  );
};

export default App;