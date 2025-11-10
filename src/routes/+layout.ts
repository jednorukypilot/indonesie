import type { Lang } from '$lib/i18n';
import { DEFAULT_LANG } from '$lib/i18n';

export const prerender = true;

export const load = async () => {
	// For static prerendering, always use the default language
	// Client-side language switching can be handled in the browser
	const lang: Lang = DEFAULT_LANG;

	return { lang };
};
