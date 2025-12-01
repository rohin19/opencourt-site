import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import the swipeable hook
import "../styles/Carousel.css";

export default function Carousel({ images }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	// Configure swipe handlers
	const swipeHandlers = useSwipeable({
		onSwipedLeft: goToNext, // Swipe left to go to the next image
		onSwipedRight: goToPrevious, // Swipe right to go to the previous image
		preventDefaultTouchmoveEvent: true, // Prevent default scrolling behavior
		trackMouse: true, // Enable mouse swiping for testing
	});

	return (
		<div className="carousel" {...swipeHandlers}>
			<div
				className="carousel-inner"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{images.map((src, i) => (
					<div className="carousel-item" key={i}>
						<img src={src} alt={`Slide ${i + 1}`} />
					</div>
				))}
			</div>

			<button className="carousel-btn prev" onClick={goToPrevious}>
				←
			</button>
			<button className="carousel-btn next" onClick={goToNext}>
				→
			</button>

			<div className="carousel-indicators">
				{images.map((_, i) => (
					<span
						key={i}
						className={`indicator ${i === currentIndex ? "active" : ""}`}
						onClick={() => setCurrentIndex(i)}></span>
				))}
			</div>
		</div>
	);
}
