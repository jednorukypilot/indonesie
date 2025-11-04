import { createCatalogData } from '$lib/utils/factory.js';
import type { CatalogData } from '$lib/types';
import type { Lang } from '$lib/i18n';
import { DEFAULT_LANG } from '$lib/i18n';

const articleFiles = import.meta.glob('$lib/content/*/catalog/catalog.json', {
	eager: true,
	import: 'default'
}) as Record<string, any[]>;

const pathFor = (lang: Lang) => `/src/lib/content/${lang}/catalog/catalog.json`;

export const load = async ({ parent }) => {
	const { lang } = (await parent()) as { lang: Lang };

	const rawCatalog = articleFiles[pathFor(lang)] ?? articleFiles[pathFor(DEFAULT_LANG)];

	const catalog: CatalogData[] = rawCatalog.map(createCatalogData);

	return { catalog };
};
