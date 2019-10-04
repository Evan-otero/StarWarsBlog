import React from "react";
import { Link } from "react-router-dom";

import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export const DetailsPlanets = () => (
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
