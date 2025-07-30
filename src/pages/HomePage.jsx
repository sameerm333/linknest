import Navbar from "../components/Navbar.jsx";
import DateDisplay from "../components/DateDisplay.jsx";
import LiveClock from "../components/LiveClock.jsx";
import LocationTracker from "../components/LocationTracker.jsx";

function HomePage() {
  return (
    <>
      <Navbar />

      <div className="container border  mt-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 border  mt-2">
          <DateDisplay />
          <LiveClock />
          <LocationTracker />
        </div>
      </div>
    </>
  );
}

export default HomePage;
