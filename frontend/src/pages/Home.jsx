import { useState } from "react";
import "../styles/App.css";
import "../styles/Home.css";
import image1 from "../assets/showandtell1_home.png"

export default function Home() {
	const [message, setMessage] = useState("");

	return (
		<div className="home-container">
			<div className="home-left">
				<h1>OpenCourt Android Application</h1>
				<p>Never waste time guessing if a tennis or basketball court is free. Our app uses a community developed dataset from current users to 
					show nearby courts with real-time availability. All the information you could need, availability, photos, lights and amenities are easily
					accessible. So you can spend less time driving and more time playing.</p>
				<div className="home-buttons">
					<button className="github-button"
						onClick={() => window.open("https://github.com/Tanvir-SS/Group22_OpenCourt", "_blank")}>
						Github
					</button>
					<button className="apk-button"
						onClick={() => {
							// const link = document.createElement("a");
							// link.href = "../assets/showandtell1.apk";
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
				<img className="home-image" src={image1} alt="home image"></img>
			</div>
		</div>
	);
}
