import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hour: 0,
  });

  const [intervalId, setIntervalId] = useState();

  const addTime = () => {
    setTime((time) => {
      let new_time = { ...time };
      if (new_time.sec < 59) {
        new_time.sec += 1;
      } else {
        new_time.sec = 0;
        new_time.min += 1;
      }
      if (new_time.min == 60) {
        new_time.min = 0;
        new_time.hour += 1;
      }
      return new_time;
    });
  };

  const startOrPause = () => {
    if (!intervalId) {
      let id = setInterval(addTime, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId("");
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setTime({ sec: 0, min: 0, hour: 0 });
  };

  return (
    <div className="stopWatch">
      <h1>StopWatch</h1>
      <h1>
        {time.hour < 10 ? 0 : ""}
        {time.hour < 10 ? 0 : ""}: {time.min < 10 ? 0 : ""}
        {time.min}: {time.sec < 10 ? 0 : ""}
        {time.sec}
      </h1>
      <div className="stopWatchButton">
        <button onClick={startOrPause}>Start/Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
