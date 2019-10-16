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
		let echo = this.state.charlie;
		console.log("echo", echo);
		let index = this.state.alpha.findIndex(item => item.name === this.state.delta);
		console.log("index", index);
		let bindex = this.state.bravo.findIndex(item => item.name === this.state.delta);
		console.log("bindex", bindex);
		console.log(this.state.bravo[bindex]);
		if (echo == "planets") {
			return <DetailsPlanets />;
		} else if (echo == "people") {
			return <DetailsCharacters />;
		}
	}
}
Details.propTypes = {
	match: Proptypes.object
};
