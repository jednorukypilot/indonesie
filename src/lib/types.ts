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
	name: string;
	title: string;
	investment: number;
	currency?: string;
	paragraphs: string[];
	coverImg?: {
		small: {
			'1x': string;
			'2x': string;
		};
		large: {
			'1x': string;
			'2x': string;
		};
	};
	imageSrc: string[];
	area: number;
	plotCount: number;
	estateCount: number;
};

export type FAQData = {
	title: string;
	paragraphs: string[];
};

export type AboutPointData = {
	title: string;
	description: string;
	icon: string;
};
