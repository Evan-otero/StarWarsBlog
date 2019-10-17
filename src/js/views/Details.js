import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import { DetailsPlanets } from "../component/DetailsPlanets.js";
import { DetailsCharacters } from "../component/DetailsCharacters.js";

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
		if (this.state.charlie === "people") {
			fetch("https://swapi.co/api/people/" + this.state.delta)
				.then(resp => {
					if (resp.ok) {
						return resp.json();
					}
				})
				.then(data => {
					this.setState({ alpha: data });
				});
		} else if (this.state.charlie === "planets") {
			fetch("https://swapi.co/api/planets/" + this.state.delta)
				.then(resp => {
					if (resp.ok) {
						return resp.json();
					}
				})
				.then(data => {
					this.setState({ bravo: data });
				});
		}
	}
	render() {
		let echo = this.state.charlie;
		console.log("echo", echo);
		console.log(this.state.alpha);
		console.log(this.state.bravo);
		console.log(this.state.alpha.name);
		console.log(this.state.bravo.name);
		//console.log(this.state.alpha);
		//let index = this.state.alpha.findIndex(item => item.name === this.state.delta);
		//console.log("index", index);
		//let bindex = this.state.bravo.findIndex(item => item.name === this.state.delta);
		//console.log("bindex", bindex);
		//console.log(this.state.bravo[bindex]);
		if (echo == "planets") {
			return (
				<DetailsPlanets
					mike={this.state.bravo.name}
					india={this.state.bravo.climate}
					juliet={this.state.bravo.gravity}
					kilo={this.state.bravo.population}
				/>
			);
		} else if (echo == "people") {
			return (
				<DetailsCharacters
					mike={this.state.alpha.name}
					india={this.state.alpha.height}
					juliet={this.state.alpha.mass}
					kilo={this.state.alpha.birth_year}
				/>
			);
		}
	}
}
Details.propTypes = {
	match: Proptypes.object
};
