import { useState } from "react";
import "../styles/Carousel.css";

export default function Carousel({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="carousel">
			<div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{images.map((src, i) => (
					<div className="carousel-item" key={i}>
						<img src={src} alt={`Slide ${i + 1}`} />
					</div>
				))}
			</div>

			<button className="carousel-btn prev" onClick={goToPrevious}>
				‹
			</button>
			<button className="carousel-btn next" onClick={goToNext}>
				›
			</button>
		</div>
	);
}
