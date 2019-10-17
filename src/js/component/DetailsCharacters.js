import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export const DetailsCharacters = props => (
	<div className="container details">
		<div className="row detailscontent">
			<div className="col-md-6">
				<img
					id="detailsimg"
					src="https://lumiere-a.akamaihd.net/v1/images/databank_abafar_01_169_475b5d42.jpeg?region=0%2C0%2C1560%2C878"
				/>
			</div>
			<div className="col-md-6 detailstext">
				Name: {props.mike} <br />
				Height: {props.india}
				<br />
				Mass: {props.juliet}
				<br />
				Birth Year: {props.kilo}
				<br />
			</div>
		</div>
	</div>
);
DetailsCharacters.propTypes = {
	foxtrot: Proptypes.string,
	golf: Proptypes.string,
	hotel: Proptypes.string,
	india: Proptypes.string,
	juliet: Proptypes.string,
	kilo: Proptypes.string,
	lima: Proptypes.string,
	mike: Proptypes.string
};
