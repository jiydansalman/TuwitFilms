export default function Hero() {
	return (
		<section id="hero">
			<div className="hero-video-wrap" aria-hidden="true">
				<video
					className="hero-video"
					src="/videos/Hero_Video.mp4"
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
				/>
				<div className="hero-video-placeholder" />
			</div>
			<div className="hero-noise" />

			<div className="hero-content">
				<p className="hero-eyebrow">Videographer · Surabaya</p>
				<h1 className="hero-title">
					TUWIT
					<span className="line2">FILMS</span>
				</h1>
				<p className="hero-sub">We tell stories through motion</p>
			</div>

			<div className="hero-scroll" aria-hidden="true">
				<span>Scroll</span>
				<div className="scroll-line" />
			</div>
		</section>
	);
}
