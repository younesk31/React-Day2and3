import React from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date());

  const changeTime = (e) => {
    e.preventDefault();
    setTime(new Date());
    setsavedTime([...savedtime, time]);
  };

  const [savedtime, setsavedTime] = useState([]);
  return (
    <div className="clock">
      <h2>Klokken er: {time.toLocaleTimeString()}.</h2>
      <button onClick={changeTime}> Klik her for at opdatere :)</button>
      <ul>
        Gemt tid:
        {savedtime.map((e, idx) => {
          return <ul key={idx}> {e.toLocaleTimeString()}</ul>;
        })}
      </ul>
    </div>
  );
};

export default Clock;
