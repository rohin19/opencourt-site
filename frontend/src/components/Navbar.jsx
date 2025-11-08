import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/App.css";
import "../styles/Navbar.css";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		// Close the menu whenever the route changes
		setIsMenuOpen(false);
	}, [location]);

	return (
		<nav className="nav">
			<div className="nav-left">
				<NavLink
					to="/"
					end
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					OpenCourt
				</NavLink>
			</div>
			<div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
			<div className={`nav-right ${isMenuOpen ? "open" : ""}`}>
				<NavLink
					to="/pitch"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Pitch
				</NavLink>
				<NavLink
					to="/team"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Team
				</NavLink>
				<NavLink
					to="/diagrams"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Diagrams
				</NavLink>
				<NavLink
					to="/videos"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Videos
				</NavLink>
				<button
					className="apk-button"
					onClick={() => {
						const link = document.createElement("a");
						link.href = "/src/assets/showandtell1.apk";
						link.download = "showandtell1-opencourt.apk";
						document.body.appendChild(link);
						link.click();
						document.body.removeChild(link);
					}}>
					APK
				</button>
			</div>
		</nav>
	);
}
