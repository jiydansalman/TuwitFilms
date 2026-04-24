const marqueeItems = [
	"Videography",
	"Cinematography",
	"Color Grading",
	"Motion Graphics",
	"Brand Films",
	"Event Coverage",
	"Commercial",
	"Documentary",
];

export default function Marquee() {
	const repeated = [...marqueeItems, ...marqueeItems];

	return (
		<div className="marquee-section" aria-label="Service specialties">
			<div className="marquee-track" id="marquee">
				{repeated.map((item, index) => (
					<div className="marquee-item" key={`${item}-${index}`}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
}
