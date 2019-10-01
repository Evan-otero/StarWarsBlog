import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Socialmedia } from "./component/Socialmedia.js";
import { Navbaritems } from "./component/Navbaritems.js";
import { InfoNav } from "./component/InfoNav.js";
import { Card } from "./component/Card.js";

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
				<div className="header container-fluid">
					<div className="headertop row">
						<div className="socialmedialinks col-md-3">
							<ul
								className="smlinkimgs"
								style={{ display: "flex" }}>
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051258.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051243.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051280.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051262.svg" />
								<Socialmedia alpha="https://image.flaticon.com/icons/svg/1051/1051248.svg" />
							</ul>
						</div>
						<div className="swlogo col-md-6">
							<img
								id="logo"
								src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG36.png"
							/>
						</div>
						<div className="utility col-md-3">
							<div className="searchbar" />
							<input />
							<div className="login">Log In // Sign Up </div>
						</div>
					</div>
					<div>
						<div className="navbar">
							<div className="navbaritems">
								<ul style={{ display: "flex" }}>
									<Navbaritems bravo="News + Blog" />
									<Navbaritems bravo="Video" />
									<Navbaritems bravo="Films" />
									<Navbaritems bravo="Series" />
									<Navbaritems bravo="Interactive" />
									<Navbaritems bravo="Community" />
									<Navbaritems bravo="Databank" />
								</ul>
							</div>
						</div>
					</div>
				</div>
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
												echo={
													this.state.delta[golf].name
												}
												mike={
													this.state.delta[golf]
														.height
												}
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
												echo={
													this.state.juliet[lima].name
												}
												mike={
													this.state.juliet[lima]
														.population
												}
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
