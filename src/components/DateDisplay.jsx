function DateDisplay() {
  const now = new Date();
  // console.log(now.toDateString());
  // console.log(now.toLocaleDateString());
  // console.log(now.toString());

  const options = {
    weekday: "long", //  "Monday"
    day: "2-digit", //  "21"
    month: "long", //  "July"
    year: "numeric", //  "2025"
  };

  let formattedDate = now.toLocaleDateString("en-GB", options);
  // console.log("Formatted Date:", formattedDate);
  return (
    <>
      <div className="col mb-4 border ">
        <div className="card h-100 text-center shadow">
          <div className="card-body">
            <h5 className="card-title">
              <i className="bi bi-calendar4 me-1"></i>
              <span>Date</span>
            </h5>
            <p className="card-text fs-4 text">{formattedDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DateDisplay;
