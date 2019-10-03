import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { InfoNav } from "../component/Infonav.js";
import { Card } from "../component/Card.js";
import { Details } from "../views/Details.js";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			delta: [],
			juliet: [],
			romeo: []
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
				console.log(this.state.juliet);
			});
	}

	quebec = () => {
		let temp = this.state.romeo;
	};

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
												echo={this.state.delta[golf].name}
												mike={this.state.delta[golf].height}
												november="Name:"
												oscar="Height:"
												papa="cm"
												key={golf}
											/>
										);
									})}
								</div>
								<div className="row">
									{this.state.delta.map((kilo, lima) => {
										return (
											<Card
												echo={this.state.juliet[lima].name}
												mike={this.state.juliet[lima].population}
												november="Name:"
												oscar="Population:"
												key={lima}
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
