import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Signup extends Component {
	constructor() {
		super();
	}

	render() {
		return <div className="container">
			<div className="row">
				<div className="col-md-4"></div>
				<div className="col-md-4 border p-4 bg-light">
					<h3 className="text-center text-danger">Register</h3>
					<hr className="bg-primary" />
					<div className="mb-3 input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fa fa-user text-warning"></i>
							</div>
						</div>
						<input type="text" className="form-control" placeholder="Enter Name" />
					</div>

					<div className="mb-3 input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fa fa-phone text-info"></i>
							</div>
						</div>
						<input type="number" className="form-control" placeholder="Enter Mobile No" />
					</div>

					<div className="mb-3 input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fa fa-envelope text-primary"></i>
							</div>
						</div>
						<input type="text" className="form-control" placeholder="Enter e-Mail id" />
					</div>

					<div className="mb-3 input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fa fa-lock text-danger"></i>
							</div>
						</div>
						<input type="text" className="form-control" placeholder="Enter Password" />
					</div>

					<div className="mb-3 input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fa fa-graduation-cap text-success"></i>
							</div>
						</div>
						<select className="form-control">
							<option>Qualification</option>
							<option>MCA</option>
							<option>BCA</option>
							<option>B.Tech-CSE</option>
							<option>B.Tech-ECE</option>
							<option>B.Tech-IT</option>
							<option>B.Tech-EEE</option>
							<option>B.Tech-CIVIL</option>
							<option>B.Tech-MECHANICAL</option>
							<option>M.Tech</option>
							<option>other Education</option>
						</select>
					</div>

					<div className="mb-3 input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fa fa-calendar"></i>
							</div>
						</div>
						<select className="form-control">
							<option>Year of passing</option>
							<option>2021</option>
							<option>2010</option>
							<option>2019</option>
							<option>2018</option>
							<option>2017</option>
							<option>2016</option>
							<option>2015</option>
							<option>2014</option>
						</select>
					</div>

					<div className="mb-3 input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fa fa-percent text-info"></i>
							</div>
						</div>
						<input type="text" className="form-control" placeholder="Enter Marks %" />
					</div>

					<button className="btn btn-primary btn-block">Register</button>
					<p className="text-center mt-3">
						<Link to="/" className="text-primary">
							<i className="fa fa-lock"></i> I have Account !
						</Link>
					</p>

				</div>
				<div className="col-md-4"></div>
			</div>
		</div>
	}
}
export default Signup; 