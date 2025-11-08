import "../styles/App.css";
import "../styles/Diagrams.css";
import CustomSlider from "../components/CustomSlider";

export default function Diagrams() {
	return (
		<div>
			<header>
				<h1>Diagrams</h1>
			</header>
			<div className="diagram-buttons">
				<button
					className="mvvm-button"
					onClick={() => {
						const link = document.createElement("a");
						link.href = "/src/assets/mvvmDiagram.pdf"; // Corrected path
						link.download = "mvvmDiagram.pdf"; // Corrected filename
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
					}}>
					MVVM
				</button>
				<button
					className="mockup-button"
					onClick={() => {
						const link = document.createElement("a");
						link.href = "/src/assets/UI_Mockup1.pdf"; // Corrected path
						link.download = "UI_Mockup.pdf"; // Corrected filename
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
					}}>
					UI Mockup
				</button>
			</div>
		</div>
	);
}
