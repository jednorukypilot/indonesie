import type { CatalogData } from '$lib/types';

export function createCatalogData(raw: any): CatalogData {
	return {
		id: raw.id,
		name: raw.name,
		title: raw.title,
		investment: raw.investment,
		currency: raw.currency,
		paragraphs: raw.paragraphs,
		coverImg: raw.coverImg
			? {
					small: {
						'1x': raw.coverImg.small['1x'],
						'2x': raw.coverImg.small['2x']
					},
					large: {
						'1x': raw.coverImg.large['1x'],
						'2x': raw.coverImg.large['2x']
					}
				}
			: undefined,
		imageSrc: raw.imageSrc,
		area: raw.area,
		plotCount: raw.plot_count,
		estateCount: raw.estate_count
	};
}
