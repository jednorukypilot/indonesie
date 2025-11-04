import type { CatalogData } from '$lib/types';
import { createCatalogData } from '$lib/types';
import type { Lang } from '$lib/i18n';
import { DEFAULT_LANG } from '$lib/i18n';
import { error } from '@sveltejs/kit';

const catalogFiles = import.meta.glob('$lib/content/*/catalog/catalog.json', {
	eager: true,
	import: 'default'
}) as Record<string, any[]>;

const pathFor = (lang: Lang) => `/src/lib/content/${lang}/catalog/catalog.json`;

export const load = async ({ params, parent }) => {
	const { lang } = (await parent()) as { lang: Lang };
	const { id } = params;

	const rawCatalog = catalogFiles[pathFor(lang)] ?? catalogFiles[pathFor(DEFAULT_LANG)];

	if (!rawCatalog) {
		throw error(404, 'Catalog not found');
	}

	const catalog: CatalogData[] = rawCatalog.map(createCatalogData);

	const catalogItem = catalog.find((item) => item.id === id);

	if (!catalogItem) {
		throw error(404, `Catalog item with id "${id}" not found`);
	}

	return {
		catalogItem,
		allCatalog: catalog
	};
};
