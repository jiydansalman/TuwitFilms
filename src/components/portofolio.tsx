"use client";

import { useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { portfolioItems } from "@/data/portofolio";

import PortofolioCard from "./portofolioCard";

export default function Portofolio() {
	const [current, setCurrent] = useState(0);
	const swiperRef = useRef<SwiperType | null>(null);
	const total = portfolioItems.length;

	const slideCounter = useMemo(
		() => `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`,
		[current, total],
	);

	const goTo = (index: number) => {
		swiperRef.current?.slideToLoop(index);
	};

	const goPrev = (event?: React.MouseEvent<HTMLButtonElement>) => {
		event?.preventDefault();
		event?.stopPropagation();
		swiperRef.current?.slidePrev();
	};

	const goNext = (event?: React.MouseEvent<HTMLButtonElement>) => {
		event?.preventDefault();
		event?.stopPropagation();
		swiperRef.current?.slideNext();
	};

	return (
		<section id="portfolio">
			<div className="portfolio-header">
				<div>
					<div className="section-label">Selected Work</div>
					<h2 className="portfolio-title">
						PORTO
						<br />
						FOLIO
					</h2>
				</div>
				<div className="portfolio-count-wrap">
					<p className="portfolio-count" id="slideCounter">
						{slideCounter}
					</p>
				</div>
			</div>

			<div className="slider-wrap">
				<Swiper
					className="slider-track"
					id="sliderTrack"
					modules={[Keyboard, EffectCoverflow]}
					onSwiper={(swiper) => {
						swiperRef.current = swiper;
						setCurrent(swiper.realIndex);
					}}
					onSlideChange={(swiper) => {
						setCurrent(swiper.realIndex);
					}}
					keyboard={{ enabled: true }}
					loop
					grabCursor
					effect="coverflow"
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 190,
						modifier: 1.1,
						slideShadows: false,
						scale: 0.82,
					}}
					centeredSlides
					slidesPerView="auto"
					spaceBetween={24}
					breakpoints={{
						0: { spaceBetween: 14 },
						769: { spaceBetween: 24 },
					}}
				>
					{portfolioItems.map((item, index) => (
						<SwiperSlide className="slider-slide" key={item.id}>
							<PortofolioCard item={item} isActive={index === current} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="slider-controls">
				<button type="button" className="slider-btn" id="prevBtn" aria-label="Previous" onClick={goPrev}>
					&#8592;
				</button>

				<div className="slider-dots" id="sliderDots">
					{portfolioItems.map((item, index) => (
						<button
							type="button"
							key={item.id}
							className={`dot ${index === current ? "active" : ""}`}
							aria-label={`Go to slide ${index + 1}`}
							onClick={() => goTo(index)}
						/>
					))}
				</div>

				<button type="button" className="slider-btn" id="nextBtn" aria-label="Next" onClick={goNext}>
					&#8594;
				</button>
			</div>
		</section>
	);
}
