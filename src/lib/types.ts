export type MenuTile = {
	title: string;
	link: string;
};

export type HomePointData = {
	title: string;
	description: string;
	icon: string;
};

export type ArticleData = {
	title: string;
	highlights: string[];
	paragraphs: string[];
	imageSrc: string[];
	imageAlt: string;
};

export type CatalogData = {
	id: string;
	title: string;
	label?: string;
	investment: number;
	currency?: string;
	paragraphs: string[];
	imageSrc: string[];
	area: number;
	plotCount: number;
	estateCount: number;
};

export function createCatalogData(raw: any): CatalogData {
	return {
		id: raw.id,
		title: raw.title,
		label: raw.label,
		investment: raw.investment,
		currency: raw.currency,
		paragraphs: raw.paragraphs,
		imageSrc: raw.imageSrc,
		area: raw.area,
		plotCount: raw.plot_count,
		estateCount: raw.estate_count
	};
}

export type QnAData = {
	title: string;
	paragraphs: string[];
};
