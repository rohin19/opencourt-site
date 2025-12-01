import { useState } from "react";
import "../styles/App.css";
import "../styles/Home.css";
import openscreen from "../assets/oc_open_screen.png";
import loginscreen from "../assets/oc_login_screen.png";
import homescreen from "../assets/oc_home_screen.png";
import courtdetail from "../assets/oc_court_detail.png";
import editcourt from "../assets/oc_edit_court.png";
import checkin from "../assets/oc_checkin.png";
import mapscreen from "../assets/oc_map_screen.png";
import addcourt from "../assets/oc_add_court.png";

import Carousel from "../components/Carousel";

export default function Home() {
	const [message, setMessage] = useState("");

	const images = [openscreen, loginscreen, homescreen, courtdetail,
		 editcourt, checkin, mapscreen, addcourt];

	return (
		<div className="home-container">
			<div className="home-left">
				<h1>OpenCourt Android Application</h1>
				<p>
					Never waste time guessing if a tennis or basketball court is free. Our app uses
					a community developed dataset from current users to show nearby courts with
					real-time availability. All the information you could need, availability,
					photos, lights and amenities are easily accessible. So you can spend less time
					driving and more time playing.
				</p>
				<div className="home-buttons">
					<button
						className="github-button"
						onClick={() =>
							window.open("https://github.com/Tanvir-SS/Group22_OpenCourt", "_blank")
						}>
						Github
					</button>
					<button
						className="apk-button"
						onClick={() => {
							// const link = document.createElement("a");
							// link.href = "/src/assets/showandtell1.apk";
							// link.download = "OpenCourt.apk";
							// document.body.appendChild(link);
							// link.click();
							// document.body.removeChild(link);
						}}>
						ZIP (tbd)
					</button>
				</div>
			</div>
			<div className="home-right">
				<Carousel images={images} />
			</div>
		</div>
	);
}
