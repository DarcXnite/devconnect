import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
	return (
		<div className="dash-buttons">
			<Link to="/edit-profile" className="btn btn-light">
				<i className="fas fa-user-circle text-primary"></i> Edit Profile
			</Link>
			<Link to="/add-experience" className="btn btn-light">
				<i className="fab fa-black-tie text-primary"></i> Add Experience
			</Link>
			<Link to="/add-education" className="btn btn-light">
				<i className="fas fa-graduation-cap text-primary"></i> Add Education
			</Link>
			<a
				href="https://en.gravatar.com/"
				target="_blank"
				className="btn btn-light"
			>
				Add an avatar photo through Gravatar
			</a>
		</div>
	);
};

export default DashboardActions;
