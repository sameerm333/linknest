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
      <i className="bi bi-calendar4 me-1"></i>
      <span>Date</span>
      <p className="fs-4">{formattedDate}</p>
    </>
  );
}

export default DateDisplay;
