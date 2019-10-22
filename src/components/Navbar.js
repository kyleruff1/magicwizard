import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/browse">
                Browse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">
                My Deck
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
