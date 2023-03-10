import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  const [value, setValue] = useState(""); // creating state; user text inputs in real time
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.searchPropertiesChanger("search", value);
    actions.datafetcher();
  }, [value]); // triggered not every render cycle, but only when value changes

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <h2 className="ion-nontext-decorate link-light">
            <i className="fa-solid fa-meteor mx-2"></i>Blue Comet Gaming
          </h2>
        </Link>
        <form className="d-flex">
          <input
            onChange={(e) => setValue(e.target.value)} // sets the value to the event =>
            value={value}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Find Games"
            aria-label="Search"
          ></input>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div>
         
          {/* login */}

          <Link to="/login">
            <button className="btn btn-primary">
              <h5>Log In/Sign Up</h5>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
