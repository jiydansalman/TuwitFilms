export default function About() {
	return (
		<section id="about">
			<div className="about-visual" aria-hidden="true">
				<div className="about-img-placeholder">
					<div className="about-img-letter">R</div>
				</div>
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
					Halo! Saya Rafli, videografer profesional di balik <strong>TuwitFilms</strong>. Berbasis di
					Surabaya dengan pengalaman lebih dari 6 tahun di industri kreatif, saya hadir untuk
					mengubah ide brand kamu menjadi visual yang berkesan dan bermakna.
					<br />
					<br />
					Telah berkolaborasi dengan brand-brand ternama seperti Wuling, Teazzie, Bank Raya, dan banyak lagi, saya mengkhususkan diri dalam pembuatan video iklan, konten media sosial, dan video profil perusahaan. Dengan pendekatan yang kreatif dan perhatian terhadap detail, saya berkomitmen untuk menyampaikan pesan brand kamu dengan cara yang paling efektif dan menarik.
                    <br />
                    <br />
                    Mari kita bawa cerita brand kamu ke level selanjutnya dengan visual yang memukau dan strategi yang tepat sasaran!
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
