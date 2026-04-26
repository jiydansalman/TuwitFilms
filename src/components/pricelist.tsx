"use client";

import { useEffect, useRef, useState } from "react";

const whatsappNumber = "6281803160036";

const priceItems = [
	{
		title: "Company Profile",
		price: "Rp10.000.000",
		desc: "Konsep, produksi, dan editing video profil perusahaan yang profesional.",
		highlight: true,
		message: "Halo TuwitFilms, saya mau order paket Company Profile (Rp10.000.000). Mohon info detail proses dan timeline.",
	},
	{
		title: "Video Production",
		price: "Rp7.500.000",
		desc: "Produksi video promosi atau campaign dengan kualitas sinematik.",
		highlight: false,
		message: "Halo TuwitFilms, saya mau order paket Video Production (Rp7.500.000). Mohon info detail proses dan timeline.",
	},
	{
		title: "Social Media",
		price: "Rp1.000.000",
		desc: "Konten pendek untuk kebutuhan Instagram, TikTok, dan reels brand.",
		highlight: false,
		message: "Halo TuwitFilms, saya mau order paket Social Media (Rp1.000.000). Mohon info detail proses dan timeline.",
	},
];

export default function Pricelist() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = sectionRef.current;
		if (!node) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<section id="pricelist" className={`pricelist-section ${isVisible ? "is-visible" : ""}`} ref={sectionRef}>
			<div className="pricelist-head">
				<div className="section-label">Pricelist</div>
				<h2 className="pricelist-title">PAKET PRODUKSI</h2>
				<p className="pricelist-sub">Pilih paket sesuai kebutuhan brand kamu.</p>
			</div>

			<div className="pricelist-grid">
				{priceItems.map((item, index) => (
					<article
						key={item.title}
						className={`price-card ${item.highlight ? "is-highlight" : ""}`}
						style={{ transitionDelay: `${index * 120}ms` }}
					>
						<div className="price-card-top">
							<h3 className="price-name">{item.title}</h3>
							<span className="price-tag">Start From</span>
						</div>
						<div className="price-value">{item.price}</div>
						<p className="price-desc">{item.desc}</p>
						<a
							href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.message)}`}
							target="_blank"
							rel="noreferrer"
							className="price-cta"
						>
							<span className="price-cta-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24" focusable="false">
									<path d="M12 2C6.49 2 2 6.33 2 11.66c0 1.85.54 3.64 1.56 5.18L2.38 22l5.39-1.11A10.22 10.22 0 0 0 12 21.33c5.51 0 10-4.34 10-9.67C22 6.33 17.51 2 12 2Zm0 17.5a8.3 8.3 0 0 1-3.95-.99l-.28-.15-3.2.66.69-3.06-.18-.29a7.65 7.65 0 0 1-1.2-4.01c0-4.32 3.65-7.83 8.12-7.83s8.12 3.51 8.12 7.83-3.65 7.84-8.12 7.84Zm4.56-5.9c-.25-.12-1.49-.72-1.72-.8-.23-.08-.4-.12-.57.12-.16.24-.65.8-.8.97-.15.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.2-.73-.64-1.23-1.42-1.37-1.66-.15-.24-.02-.37.11-.48.11-.1.25-.25.38-.38.13-.13.17-.23.25-.39.08-.16.04-.3-.02-.42-.06-.12-.57-1.34-.78-1.83-.2-.48-.4-.41-.57-.42h-.49c-.16 0-.42.06-.64.3-.22.24-.84.8-.84 1.94s.86 2.25.98 2.4c.12.16 1.67 2.59 4.05 3.63.57.25 1.01.4 1.36.52.57.18 1.08.16 1.49.1.45-.06 1.49-.6 1.7-1.18.21-.57.21-1.06.15-1.16-.06-.1-.23-.16-.48-.28Z" />
								</svg>
							</span>
							<span>Order via WhatsApp</span>
						</a>
						<p className="price-cta-hint">Respon cepat untuk jadwal produksi.</p>
					</article>
				))}
			</div>
		</section>
	);
}
