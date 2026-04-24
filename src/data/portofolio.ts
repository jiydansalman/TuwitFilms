export type PortfolioItem = {
	id: number;
	category: string;
	year: string;
	titleLine1: string;
	titleLine2: string;
	thumbnail?: string;
	videoSrc?: string;
	gradient: string;
};

export const portfolioItems: PortfolioItem[] = [
	{
		id: 0,
		category: "Showereel",
		year: "2026",
		titleLine1: "Rafli Tuwit",
		titleLine2: "TuwitFilms",
		videoSrc: "/videos/projects/project1.mp4",
		gradient: "linear-gradient(160deg,#1a1a1a,#333333)",
	},
	{
		id: 1,
		category: "Product",
		year: "2025",
		titleLine1: "Catural",
		titleLine2: "Campaign",
		videoSrc: "/videos/projects/project2.mp4",
		gradient: "linear-gradient(160deg,#222222,#111111)",
	},
	{
		id: 2,
		category: "Event",
		year: "2025",
		titleLine1: "Wuling",
		titleLine2: "Event Recap",
		videoSrc: "/videos/projects/project3.mp4",
		gradient: "linear-gradient(160deg,#181818,#2a2a2a)",
	},
	{
		id: 3,
		category: "Event",
		year: "2023",
		titleLine1: "Teazzie",
		titleLine2: "Event Recap",
		videoSrc: "/videos/projects/project4.mp4",
		gradient: "linear-gradient(160deg,#1e1e1e,#0e0e0e)",
	}
];
