import "../styles/App.css";
import "../styles/Videos.css";

export default function Videos() {
	return (
		<div className="videos-page">
			<header>
				<h1>Videos</h1>
			</header>
			<div className="video-cards">
				<div className="video-card">
					<h2>Project Pitch</h2>
					<iframe
						className="video-frame"
						src="https://www.youtube.com/embed/bP_2aY07pZA"
						title="Introduction to OpenCourt"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video-card">
					<h2>Show and Tell 1</h2>
					<iframe
						className="video-frame"
						src="https://www.youtube.com/embed/a2nLtq4466w"
						title="How OpenCourt Works"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
}
