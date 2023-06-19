import React from "react";
import { Dropdown } from 'react-bootstrap';
import Badge from "react-bootstrap/Badge";
function Navbar(){
    return(
    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
    id="layout-navbar">
        <div className="container">
        <div className="row">
            <div className="col-md-2"> <a class="navbar-brand" href="#">IKM</a></div>
            <div className="col-md-8"></div>
            <div className="col-md-2">
            <div
        className="navbar-nav-right d-flex align-items-end"
        id="navbar-collapse"
      >
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i> Profile
          </div>
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="notification">
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <Badge className="notificationalert"></Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <li>
                    <a class="dropdown-item" href="#">
                      Notification
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Notification
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Notification
                    </a>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            </ul>
            </div>
            </div>
            </div>
        </div>
        </div>
       
        



    </nav>
);

}
export default Navbar;