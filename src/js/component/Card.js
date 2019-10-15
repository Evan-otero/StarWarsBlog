import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="col-md-3">
			<div className="card">
				<img
					className="card-img-top"
					src="https://media.wired.com/photos/5bb3fffc2b915f2dff96d696/master/pass/chewbacca-971316060.jpg"
					alt="Card image cap"
				/>{" "}
				<div className="card-body">
					<h5 className="card-title">
						{props.november}
						<br />
						{props.echo}
					</h5>
					<Link to={`/details/${props.whiskey}/${props.echo}/`}>
						<button>Details</button>
					</Link>
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
	papa: Proptypes.string,
	whiskey: Proptypes.string
};
