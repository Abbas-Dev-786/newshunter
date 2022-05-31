import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              NewsMonkey
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/business" ? "active" : ""
                    }`}
                    to="/business"
                  >
                    Business
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/entertainment" ? "active" : ""
                    }`}
                    to="/entertainment"
                  >
                    Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/health" ? "active" : ""
                    }`}
                    to="/health"
                  >
                    Health
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/science" ? "active" : ""
                    }`}
                    to="/science"
                  >
                    Science
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/sports" ? "active" : ""
                    }`}
                    to="/sports"
                  >
                    Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/technology" ? "active" : ""
                    }`}
                    to="/technology"
                  >
                    Technology
                  </NavLink>
                </li>
              </ul>
              <button
                className="btn btn-outline-success d-block mx-auto"
                type="submit"
              >
                See Bookmarks
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
