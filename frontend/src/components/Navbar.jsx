import { NavLink } from "react-router-dom";
import "../styles/App.css";
import "../styles/Navbar.css";

export default function Navbar() {
	return (
		<nav className="nav">
			<div className="nav-left">
				<NavLink to="/" end 
                    className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					OpenCourt
				</NavLink>
			</div>
			<div className="nav-right">
				<NavLink to="/pitch"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Pitch
				</NavLink>
				<NavLink to="/team"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Team
				</NavLink>
				<NavLink to="/diagrams"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Diagrams
				</NavLink>
				<NavLink to="/videos"
					className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
					Videos
				</NavLink>
                    <button className="apk-button"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "../assets/showandtell1.apk";
                        link.download = "OpenCourt.apk";
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
