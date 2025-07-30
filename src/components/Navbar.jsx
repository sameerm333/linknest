import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg border ">
        <div className="container border">
          <div className="navbar-brand">
            <i className="bi bi-terminal"></i>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
              <li className="nav-item border">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active " : "nav-link "
                  }
                >
                  <i className="bi bi-house me-1"></i>
                  <span>Home</span>
                </NavLink>
              </li>

              <li className="nav-item border">
                <NavLink
                  to="/weblinks"
                  className={({ isActive }) =>
                    isActive ? "nav-link active " : "nav-link "
                  }
                >
                  <i className="bi bi-link-45deg me-1"></i>
                  <span>WebLinks</span>
                </NavLink>
              </li>

              {/* <li className="nav-item border">
                <NavLink
                  to="/trending"
                  className={({ isActive }) =>
                    isActive ? "nav-link active " : "nav-link"
                  }
                >
                  Trending
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
