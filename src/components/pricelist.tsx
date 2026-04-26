const priceItems = [
	{
		title: "Company Profile",
		price: "Rp10.000.000",
		desc: "Konsep, produksi, dan editing video profil perusahaan yang profesional.",
		highlight: true,
	},
	{
		title: "Video Production",
		price: "Rp7.500.000",
		desc: "Produksi video promosi atau campaign dengan kualitas sinematik.",
		highlight: false,
	},
	{
		title: "Social Media",
		price: "Rp1.000.000",
		desc: "Konten pendek untuk kebutuhan Instagram, TikTok, dan reels brand.",
		highlight: false,
	},
];

export default function Pricelist() {
	return (
		<section id="pricelist" className="pricelist-section">
			<div className="pricelist-head">
				<div className="section-label">Pricelist</div>
				<h2 className="pricelist-title">PAKET PRODUKSI</h2>
				<p className="pricelist-sub">Pilih paket sesuai kebutuhan brand kamu.</p>
			</div>

			<div className="pricelist-grid">
				{priceItems.map((item) => (
					<article key={item.title} className={`price-card ${item.highlight ? "is-highlight" : ""}`}>
						<div className="price-card-top">
							<h3 className="price-name">{item.title}</h3>
							<span className="price-tag">Start From</span>
						</div>
						<div className="price-value">{item.price}</div>
						<p className="price-desc">{item.desc}</p>
					</article>
				))}
			</div>
		</section>
	);
}
