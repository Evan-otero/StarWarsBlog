import React from "react";
import Proptypes from "prop-types";

export const InfoNav = props => {
	return <li className="infonavbarli">{props.charlie}</li>;
};
InfoNav.propTypes = {
	charlie: Proptypes.string
};