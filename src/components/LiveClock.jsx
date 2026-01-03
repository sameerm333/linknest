import React, { useState, useEffect } from "react";
function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  return (
    <>
      <i className="bi bi-clock me-1"></i>
      <span>Live</span>
      <p className="fs-2 ">
        {hours}:{minutes}:{seconds}
      </p>
    </>
  );
}

export default LiveClock;
