import { useState } from "react";
import "../styles/App.css";
import "../styles/Home.css";
import splashscreen from "../assets/splash_screen.png";
import loginscreen from "../assets/login_screen.png";
import homescreen from "../assets/home_screen.png";
import favouritesscreen from "../assets/favourites_screen.png";
import courtdetail from "../assets/court_detail.png";
import editcourt from "../assets/edit_court.png";
import mapscreen from "../assets/map_screen.png";
import addcourt from "../assets/add_court.png";

import Carousel from "../components/Carousel";

export default function Home() {
	const [message, setMessage] = useState("");

	const images = [
		splashscreen,
		loginscreen,
		homescreen,
		favouritesscreen,
		courtdetail,
		editcourt,
		mapscreen,
		addcourt,
	];

	return (
		<div className="home-wrapper">
			<div className="home-container">
				<div className="home-left">
					<h1>OpenCourt Android Application</h1>
					<p>
						Never waste time guessing if a tennis or basketball court is free. Our app
						uses a community developed dataset from current users to show nearby courts
						with real-time availability. All the information you could need, availability,
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
								const link = document.createElement("a");
								link.href = "/Group22_OpenCourt.zip";
								link.download = "Group22_OpenCourt.zip";
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							}}>
							ZIP
						</button>
					</div>
				</div>
				<div className="home-right">
					<Carousel images={images} />
				</div>
			</div>
			<div className="home-second">
				<h1>Demo</h1>
				<div className="video-card">
					<iframe
						className="video-frame"
						src="https://www.youtube.com/embed/zAXvRrGxMB4"
						title="Final demo presentation"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
}
