import "../styles/App.css";
import "../styles/Pitch.css";

export default function Pitch() {
	return (
		<div className="pitch">
			<header>
				<h1>Original Pitch</h1>
				<p>With public sports, you never know if a court's free. You end up driving around hoping for a spot to be open when you get there.
					 Regular maps show where courts are, not whether they're open. Our application, OpenCourt is a map of nearby courts where players can check court availability in advance with
					 free, in play, or waiting options and short notes. Before you step out the door, you can be sure there's a spot waiting for you. A community driven dataset makes us unique. 
					 Think Waze but for sports, we track each court individually using community data. Check-ins only count if you're actually there and they auto expire. You see your last verified time,
					 and other details like lighting and amenitities so you can be sure the court is right for you.</p>
			</header>
		</div>
	);
}
