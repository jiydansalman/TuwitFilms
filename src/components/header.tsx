"use client";

import { useEffect, useState } from "react";

const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Portofolio", href: "#portfolio" },
	{ label: "Pricelist", href: "#pricelist" },
	{ label: "Contact", href: "#contact" },
];

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll);
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={`site-header ${isScrolled ? "scrolled" : ""}`} id="header">
			<a href="#hero" className="logo">
				TUWIT<span>FILMS</span>
			</a>
			<nav>
				{navItems.map((item) => (
					<a key={item.href} href={item.href}>
						{item.label}
					</a>
				))}
			</nav>
		</header>
	);
}
