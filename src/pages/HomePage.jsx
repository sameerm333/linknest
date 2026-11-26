import Navbar from "../components/Navbar.jsx";
import DateDisplay from "../components/DateDisplay.jsx";
import LiveClock from "../components/LiveClock.jsx";
import LocationTracker from "../components/LocationTracker.jsx";
import Calendar from "../components/Calendar/Calendar.jsx";

function HomePage() {
  return (
    <>
      <Navbar />

      <div className="container border  mt-2">
        <div className="row  border  mt-2">
          <div className="col-12 col-12 col-lg-6 border ">
            <div className="list-group list-group-flush">
              <div className="list-group-item">
                <LiveClock />
              </div>
              <div className="list-group-item  ">
                <DateDisplay />
              </div>
              <div className="list-group-item ">
                <LocationTracker />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 border">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
