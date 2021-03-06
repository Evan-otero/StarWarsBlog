import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { InfoNav } from "../component/Infonav.js";
import { Card } from "../component/Card.js";
import { Details } from "../views/Details.js";
import { Link } from "react-router-dom";
import { DetailsPlanets } from "../component/DetailsPlanets.js";
import { DetailsCharacters } from "../component/DetailsCharacters.js";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			delta: [],
			juliet: []
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
				this.setState({ delta: data.results });
			});
		fetch("https://swapi.co/api/planets/")
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(data => {
				this.setState({ juliet: data.results });
			});
	}

	render() {
		return (
			<div>
				<div className="content container">
					<div className="maincontent">
						<div className="browsedatabank">Browse Databank //</div>
						<div className="row">
							<div className="col-md-2 browse">
								<ul className="browselist">
									<InfoNav charlie="Browse" />
									<InfoNav charlie="Characters" />
									<InfoNav charlie="Planets" />
								</ul>
							</div>
							<div className="col-md-10">
								<div className="row">
									{this.state.delta.map((foxtrot, golf) => {
										return (
											<Card
												echo={foxtrot.name}
												november="Name:"
												key={golf}
												whiskey="people"
												yankee={foxtrot.url.slice(28, foxtrot.url.length - 1)}
											/>
										);
									})}
								</div>
								<div className="row">
									{this.state.juliet.map((kilo, lima) => {
										return (
											<Card
												echo={kilo.name}
												november="Name:"
												key={lima}
												whiskey="planets"
												yankee={kilo.url.slice(29, kilo.url.length - 1)}
											/>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
