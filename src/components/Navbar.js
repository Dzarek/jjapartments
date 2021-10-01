import React, { Component } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdTranslate } from "react-icons/md";
import { GiExitDoor } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";

import icon from "../images/my/pillowIcon2.png";
import polandFlag from "../images/my/poland-flag.png";
import usaFlag from "../images/my/usa-flag.png";
import { RoomContext } from "../context";

class Navbar extends Component {
  static contextType = RoomContext;

  render() {
    const {
      handleToggle,
      handleTogglePolish,
      handleToggleEnglish,
      handleToggleLanguage,
      isOpen,
      viewlanguage,
      polish,
      english,
      language,
    } = this.context;
    // console.log(language);
    const list = [
      { name: "Home", path: "/", exact: true },
      { name: "Rooms", path: "/rooms" },
      { name: "Reservation", path: "/reservation" },
      { name: "Gallery", path: "/gallery" },
      { name: "Cracow", path: "/cracow" },
      { name: "Contact", path: "/contact" },
    ];

    const list2 = [
      { name: "Strona Główna", path: "/strona-glowna", exact: true },
      { name: "Pokoje", path: "/pokoje" },
      { name: "Rezerwacja", path: "/rezerwacja" },
      { name: "Galeria", path: "/galeria" },
      { name: "Kraków", path: "/krakow" },
      { name: "Kontakt", path: "/kontakt" },
    ];

    const menu = list.map((item) => (
      <li key={item.name}>
        <NavLink
          onClick={handleToggle}
          to={item.path}
          exact={item.exact ? item.exact : false}
        >
          <img className="iconNav" src={icon} alt="icon" />
          {item.name}
        </NavLink>
      </li>
    ));
    const menu2 = list2.map((item) => (
      <li key={item.name}>
        <NavLink
          onClick={handleToggle}
          to={item.path}
          exact={item.exact ? item.exact : false}
        >
          <img className="iconNav" src={icon} alt="icon" />
          {item.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
            >
              <h2>JJ Apartments</h2>
            </Link>
            <button type="button" className="nav-btn" onClick={handleToggle}>
              <HiMenuAlt3 className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            {polish ? menu2 : menu}
            <section className="navbarLanguage">
              {viewlanguage ? (
                <GiExitDoor
                  className="navbarToggleLanguage-big"
                  onClick={handleToggleLanguage}
                />
              ) : (
                <MdTranslate
                  className="navbarToggleLanguage"
                  onClick={handleToggleLanguage}
                />
              )}
              {viewlanguage ? (
                <div className="language-change">
                  {polish ? <h2>Zmiana Języka</h2> : <h2>Change Language</h2>}
                  <div className="language-change-items">
                    <NavLink to="/strona-glowna">
                      <img
                        src={polandFlag}
                        alt="polandFlag"
                        onClick={handleTogglePolish}
                      />
                    </NavLink>
                    <NavLink to="/">
                      <img
                        src={usaFlag}
                        alt="usaFlag"
                        onClick={handleToggleEnglish}
                      />
                    </NavLink>
                  </div>
                </div>
              ) : null}
            </section>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
