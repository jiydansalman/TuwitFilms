"use client";

import { useEffect, useRef, type CSSProperties } from "react";

import type { PortfolioItem } from "@/data/portofolio";

type PortfolioCardProps = {
	item: PortfolioItem;
	isActive: boolean;
};

export default function PortofolioCard({ item, isActive }: PortfolioCardProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) {
			return;
		}

		if (isActive) {
			void video.play().catch(() => {
				// Ignore autoplay rejections from strict browser policies.
			});
		} else {
			video.pause();
		}
	}, [isActive]);

	const style: CSSProperties = {
		background: item.gradient,
	};

	return (
		<article className={`card ${isActive ? "active" : ""}`}>
			<div className="card-video-bg" style={style}>
				{item.videoSrc ? (
					<video
						ref={videoRef}
						className="card-video"
						src={item.videoSrc}
						autoPlay={isActive}
						muted
						loop
						playsInline
						preload={isActive ? "auto" : "metadata"}
					/>
				) : null}
			</div>
			<div className="card-pattern" />
			<div className="card-overlay">
				<span className="card-tag">
					{item.category} · {item.year}
				</span>
				<h3 className="card-title">
					{item.titleLine1}
					<br />
					{item.titleLine2}
				</h3>
			</div>
		</article>
	);
}
