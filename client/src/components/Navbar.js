import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand fixed-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/browse">
                browse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">
                my deck
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
