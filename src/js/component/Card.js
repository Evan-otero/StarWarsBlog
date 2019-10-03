import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="col-md-3">
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">
						{props.november}
						<br />
						{props.echo}
					</h5>
					<h7>
						{props.oscar}
						<br />
						{props.mike}
						<br />
						{props.papa}
						<br />
					</h7>
					<Link to="/details">
						<button>Go to Details</button>
					</Link>{" "}
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	echo: Proptypes.string,
	mike: Proptypes.string,
	november: Proptypes.string,
	oscar: Proptypes.string,
	papa: Proptypes.string
};
