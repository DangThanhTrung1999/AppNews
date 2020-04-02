import React, { Component } from "react";
import '../App.css';
import {Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="row ">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
