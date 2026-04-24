"use client";

import { useEffect } from "react";

export default function CustomerCursor() {
	useEffect(() => {
		const isFinePointer =
			window.matchMedia("(pointer: fine)").matches ||
			window.matchMedia("(any-pointer: fine)").matches;
		if (!isFinePointer) {
			return;
		}

		const cursor = document.getElementById("cursor");
		const ring = document.getElementById("cursorRing");
		if (!cursor || !ring) {
			return;
		}

		document.body.classList.add("custom-cursor-enabled");

		let mouseX = window.innerWidth / 2;
		let mouseY = window.innerHeight / 2;
		let ringX = mouseX;
		let ringY = mouseY;
		let frameId = 0;

		const onMove = (event: MouseEvent | PointerEvent) => {
			mouseX = event.clientX;
			mouseY = event.clientY;
			cursor.style.opacity = "1";
			ring.style.opacity = "1";
		};

		const onLeaveViewport = () => {
			cursor.style.opacity = "0";
			ring.style.opacity = "0";
		};

		const onEnterViewport = () => {
			cursor.style.opacity = "1";
			ring.style.opacity = "1";
		};

		const animate = () => {
			cursor.style.left = `${mouseX}px`;
			cursor.style.top = `${mouseY}px`;

			ringX += (mouseX - ringX) * 0.12;
			ringY += (mouseY - ringY) * 0.12;

			ring.style.left = `${ringX}px`;
			ring.style.top = `${ringY}px`;

			frameId = window.requestAnimationFrame(animate);
		};

		const hoverTargets = document.querySelectorAll("a, button, .card");
		const onEnter = () => document.body.classList.add("cursor-hover");
		const onLeave = () => document.body.classList.remove("cursor-hover");

		window.addEventListener("pointermove", onMove, { passive: true });
		window.addEventListener("mousemove", onMove, { passive: true });
		document.addEventListener("mouseleave", onLeaveViewport);
		document.addEventListener("mouseenter", onEnterViewport);
		hoverTargets.forEach((element) => {
			element.addEventListener("mouseenter", onEnter);
			element.addEventListener("mouseleave", onLeave);
		});
		frameId = window.requestAnimationFrame(animate);

		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseleave", onLeaveViewport);
			document.removeEventListener("mouseenter", onEnterViewport);
			hoverTargets.forEach((element) => {
				element.removeEventListener("mouseenter", onEnter);
				element.removeEventListener("mouseleave", onLeave);
			});
			window.cancelAnimationFrame(frameId);
			document.body.classList.remove("cursor-hover");
			document.body.classList.remove("custom-cursor-enabled");
		};
	}, []);

	return (
		<>
			<div className="cursor" id="cursor" aria-hidden="true" />
			<div className="cursor-ring" id="cursorRing" aria-hidden="true" />
		</>
	);
}
