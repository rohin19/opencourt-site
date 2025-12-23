import "../styles/App.css";
import "../styles/Team.css";

export default function Team() {
	return (
		<div className="team-page">
			<header>
				<h1>Team Breakdown</h1>
			</header>

			<section className="team-cards">
				<div className="card">
					<h2>Rohin Aulakh</h2>
					<ul>
						<li>Google Maps Interface</li>
						<li>Location Permissions</li>
						<li>Project Webpage</li>
					</ul>
				</div>
				<div className="card">
					<h2>Hugo Najafi</h2>
					<ul>
						<li>UI Setup</li>
						<li>Firebase Database</li>
						<li>User Testing</li>
					</ul>
				</div>
				<div className="card">
					<h2>Tanvir Shergill</h2>
					<ul>
						<li>Repository Setup</li>
						<li>Video Updates</li>
						<li>Authorization</li>
					</ul>
				</div>
				<div className="card">
					<h2>Harry Gupta</h2>
					<ul>
						<li>MVVM Diagram</li>
						<li>Figma UI Mockups</li>
						<li>Slideshow Creation</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
