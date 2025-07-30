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
      <div className="col mb-4 border ">
        <div className="card h-100 text-center shadow">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-clock me-1"></i>
              <span>Live</span>
            </h5>
            <span className="card-text fs-2 text">
              <p className="card-text display-9">
                {hours}:{minutes}:{seconds}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveClock;
