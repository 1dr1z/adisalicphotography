import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataConsumer } from "../context";

export class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="wrapper-header">
            <DataConsumer>
              {value => {
                const { path, alt } = value.logo;
                return (
                  <React.Fragment>
                    <div className="logo">
                      <Link to="/">
                        <img src={path} alt={alt} />
                      </Link>
                    </div>
                    <div className="menu-items">
                      <div
                        className="icon-opener"
                        onClick={() => value.handleMenu()}
                      >
                        <i className="fas fa-bars" />
                        {/* <i className="fas fa-times"></i> */}
                      </div>
                      <div
                        className="menu-list"
                        onMouseLeave={() => value.handleMenu()}
                      >
                        <ul className="nav-items">
                          <li className="nav-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/weddings">Weddings</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/concerts">Concerts</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/sport">Sport</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/ads">Ads</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/awards">Awards/Winnings</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/biography">Biography</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }}
            </DataConsumer>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
