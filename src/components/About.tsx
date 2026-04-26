import Image from "next/image";

export default function About() {
	return (
		<section id="about">
			<div className="about-visual" aria-hidden="true">
				<Image src="/Fototuwit.jpg" alt="Foto profil Rafli" fill className="about-photo" />
				<div className="about-grid-overlay" />
				<div className="about-tag-overlay">RAFLI</div>
			</div>

			<div className="about-text">
				<div className="section-label">The Filmmaker</div>

				<h2 className="about-name">
					RAFLI
					<span className="muted">FIRMANSYAH</span>
				</h2>

				<p className="about-bio">
					Saya Rafli dari <strong>TuwitFilms</strong>, videografer asal Surabaya dengan 6+ tahun
					pengalaman. Fokus saya membantu brand tampil lebih kuat lewat video iklan,
					company profile, dan konten media sosial yang tepat sasaran.
				</p>

				<div className="skills-list">
					<span className="skill-pill">Adobe Premiere</span>
					<span className="skill-pill">DaVinci Resolve</span>
					<span className="skill-pill">After Effects</span>
					<span className="skill-pill">Color Grading</span>
					<span className="skill-pill">Motion Graphics</span>
				</div>

				<div className="about-stats">
					<div className="stat-item">
						<div className="stat-num">6+</div>
						<div className="stat-label">Tahun Pengalaman</div>
					</div>
					<div className="stat-item">
						<div className="stat-num">50+</div>
						<div className="stat-label">Proyek Selesai</div>
					</div>
					<div className="stat-item">
						<div className="stat-num">20+</div>
						<div className="stat-label">Brand Partner</div>
					</div>
				</div>
			</div>
		</section>
	);
}
