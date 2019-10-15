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
		//console.log("####", this.state.bravo[this.state.delta - 2]);
		console.log(this.state.bravo[bindex]);
		if ((echo = "planets")) {
			return this.state.bravo.map((kilo, lima) => {
				return <DetailsPlanets key={lima} foxtrot={kilo.name} />;
			});
		} else if ((echo = "people")) {
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus orci, tristique in
							auctor nec, consequat a metus. Nunc nisi magna, faucibus eu euismod nec, ultrices in ex.
							Integer eget feugiat tellus. Nulla ex elit, commodo id pulvinar at, sollicitudin et eros.
							Sed lobortis risus non arcu sodales, posuere elementum tortor elementum. Nunc
						</div>
					</div>
				</div>
			);
		}
	}
}
Details.propTypes = {
	match: Proptypes.object
};
