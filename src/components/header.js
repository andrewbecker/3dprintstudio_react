import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">3DPS</a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item">
                <a className="nav-link" href="/store">Store</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <a href="https://www.3dhubs.com/service/The3DPrintStudio"><button className="btn btn-outline-success my-2 my-sm-0">Order a Custom 3D Print</button></a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
