import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar">
				<div className="header container-fluid">
					<div className="headertop row">
						<div className="socialmedialinks col-md-3">
							<ul className="smlinkimgs" style={{ display: "flex" }}>
								<li className="smimages">
									<img src="https://image.flaticon.com/icons/svg/1051/1051258.svg" />
								</li>
								<li className="smimages">
									<img src="https://image.flaticon.com/icons/svg/1051/1051243.svg" />
								</li>
								<li className="smimages">
									<img src="https://image.flaticon.com/icons/svg/1051/1051280.svg" />
								</li>
								<li className="smimages">
									<img src="https://image.flaticon.com/icons/svg/1051/1051262.svg" />
								</li>
								<li className="smimages">
									<img src="https://image.flaticon.com/icons/svg/1051/1051248.svg" />
								</li>
							</ul>
						</div>
						<div className="swlogo col-md-6">
							<img id="logo" src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG36.png" />
						</div>
						<div className="utility col-md-3">
							<div className="searchbar" />
							<input />
							<div className="login">Log In // Sign Up </div>
						</div>
					</div>
					<div className="navdiv">
						<div className="nbar">
							<div className="navbaritems">
								<ul style={{ display: "flex" }}>
									<Link to="/">
										<li className="navbarli">Home</li>
									</Link>
									;
									<Link to="/details">
										<li className="navbarli">Details</li>
									</Link>
									;
									<li className="navbarli dropdown">
                                    <button onClick=""/>
										Favorites
									</li>
									;<li className="navbarli">Series</li>;<li className="navbarli">Interactive</li>;
									<li className="navbarli">Community</li>;<li className="navbarli">Databank</li>;
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
