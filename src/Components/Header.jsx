import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="hero_area">
        <header className="header_section">
          <div className="header_top">
            <div className="container-fluid">
              <div className="contact_nav">
                <a href>
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Call : +01 123455678990</span>
                </a>
                <a href>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>Email : demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                  <span>Inance</span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className> </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ">
                    <li className="nav-item active">
                      <NavLink to="/" className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/About"
                        className="nav-link"
                        href="about.html"
                      >
                        {" "}
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Services"
                        className="nav-link"
                        href="service.html"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Contact"
                        className="nav-link"
                        href="contact.html"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/pages"
                        className="nav-link"
                        href="contact.html"
                      >
                        Pages
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
