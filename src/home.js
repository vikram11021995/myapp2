import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="text-primary">Welcome , Ramesh</h2>
          </div>
        </div>
        <div className="row text-center mt-3">
          <div className="col-md-4">
            <div className="bg-light p-3 rounded">
              <i className="fa fa-eye fa-3x text-warning"></i>
              <h5 className="text-secondary">
                Profile Viewed 7 Times by companies
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-4 rounded">
              <i className="fa fa-building fa-3x text-warning"></i>
              <h5 className="text-secondary">Profile Sent in 10 Companies</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-4 rounded">
              <i className="fa fa-check fa-3x text-warning"></i>
              <h5 className="text-secondary">
                Profile Selected in 5 Companies
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
