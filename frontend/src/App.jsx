import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pitch from "./pages/Pitch";
import Team from "./pages/Team";
import Diagrams from "./pages/Diagrams";
import Videos from "./pages/Videos";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pitch" element={<Pitch />} />
					<Route path="/team" element={<Team />} />
					<Route path="/diagrams" element={<Diagrams />} />
					<Route path="/videos" element={<Videos />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
