import "../styles/App.css";
import "../styles/Team.css";

export default function Team() {
	return (
		<div>
			<header>
				<h1>Team Breakdown</h1>
			</header>

			<section className="team-cards">
				<div className="card">
					<h2>Rohin</h2>
					<ul>
						<li>Google Maps Interface</li>
						<li>Location Permissions</li>
						<li>Project Webpage</li>
					</ul>
				</div>
				<div className="card">
					<h2>Hugo</h2>
					<ul>
						<li>UI Setup</li>
						<li>Firebase Database</li>
						<li>User Testing</li>
					</ul>
				</div>
				<div className="card">
					<h2>Tanvir</h2>
					<ul>
						<li>Repository Setup</li>
						<li>Video Updates</li>
						<li>Authorization</li>
					</ul>
				</div>
				<div className="card">
					<h2>Harry</h2>
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
