import React from "react";
import { Link } from "react-router-dom";

import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export const Details = () => (
	<div className="container">
		<div>
			<div>
				<img src="https://lumiere-a.akamaihd.net/v1/images/databank_abafar_01_169_475b5d42.jpeg?region=0%2C0%2C1560%2C878" />
			</div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus orci, tristique in auctor nec,
				consequat a metus. Nunc nisi magna, faucibus eu euismod nec, ultrices in ex. Integer eget feugiat
				tellus. Nulla ex elit, commodo id pulvinar at, sollicitudin et eros. Sed lobortis risus non arcu
				sodales, posuere elementum tortor elementum. Nunc
			</div>
		</div>
	</div>
);
