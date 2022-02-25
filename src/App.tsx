import { useEffect, useState } from 'react'
import './App.css'

const COUNTDOWN_INICIAL_TIME_IN_SECONDS = 25 * 60 // 25 minutes

function App() {

  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INICIAL_TIME_IN_SECONDS);

  useEffect(() => {
    if (secondsAmount === 0) {
      alert("Finalizado.");
      return;
    }

    setTimeout(() => {
      setSecondsAmount(state => state - 1);
    }, 1000);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className="App">
      <span id="minutes">{String(minutes).padStart(2, "0")}</span>
      <span>:</span>
      <span id="seconds">{String(seconds).padStart(2, "0")}</span>
    </div>
  )
}

export default App
