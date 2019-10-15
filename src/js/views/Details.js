import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export class Details extends React.Component {
	constructor(props, { match }) {
		super(props, { match });
		this.state = {
			alpha: [],
			bravo: [],
			charlie: props.match.params.thename,
			delta: props.match.params.theid
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(data => {
				this.setState({ alpha: data.results });
			});
		fetch("https://swapi.co/api/planets/")
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(data => {
				this.setState({ bravo: data.results });
			});
	}
	render() {
		console.log(this.state.match);
		return (
			<div className="container details">
				<div className="row detailscontent">
					<div className="col-md-6">
						<img
							id="detailsimg"
							src="https://lumiere-a.akamaihd.net/v1/images/databank_abafar_01_169_475b5d42.jpeg?region=0%2C0%2C1560%2C878"
						/>
					</div>
					<div className="col-md-6 detailstext">
						Name: <br />
						Rotation Period:
						<br />
						Oribtital Period:
						<br />
						Diameter:
						<br />
						Climate:
						<br />
						Gravity
						<br />
						Population
						<br />
						Residents
						<br />
					</div>
				</div>
			</div>
		);
	}
}
Details.propTypes = {
	match: Proptypes.object
};
