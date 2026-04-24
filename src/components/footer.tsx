export default function Footer() {
	return (
		<footer id="contact">
			<div className="contact-top">
				<div>
					<h2 className="contact-heading">
						AYO
						<span className="muted">KOLABORASI</span>
					</h2>
				</div>

				<div className="contact-info">
					<div className="contact-item">
						<p className="contact-item-label">Email</p>
						<a href="mailto:tuwitfilms@gmail.com" className="contact-item-val">
							tuwitfilms@gmail.com
						</a>
					</div>
					<div className="contact-item">
						<p className="contact-item-label">WhatsApp</p>
						<a href="https://wa.me/6281803160036" className="contact-item-val" target="_blank" rel="noreferrer">
							+62 8180-3160-036
						</a>
					</div>
					<div className="contact-item">
						<p className="contact-item-label">Lokasi</p>
						<span className="contact-item-val">Surabaya, Jawa Timur</span>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<span className="footer-logo">TUWITFILMS</span>

				<div className="social-links">
					<a href="https://www.instagram.com/tuwitfilms" target="_blank" rel="noreferrer">
						Instagram
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						YouTube
					</a>
					<a href="#" target="_blank" rel="noreferrer">
						TikTok
					</a>
					<a href="https://wa.me/6281803160036" target="_blank" rel="noreferrer">
						Whatsapp
					</a>
				</div>

				<span className="footer-copy">&copy; 2026 TuwitFilms · All Rights Reserved</span>
			</div>
		</footer>
	);
}
