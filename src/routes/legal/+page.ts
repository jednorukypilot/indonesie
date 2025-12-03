import type { FAQData, StepsData } from '$lib/types';
import type { Lang } from '$lib/i18n';
import { DEFAULT_LANG } from '$lib/i18n';

// Import all localized FAQ files at build time
const faqFiles = import.meta.glob('$lib/content/*/legal/faq.json', {
	eager: true,
	import: 'default'
}) as Record<string, FAQData[]>;

// Import all localized steps files at build time
const stepsFiles = import.meta.glob('$lib/content/*/legal/steps.json', {
	eager: true,
	import: 'default'
}) as Record<string, StepsData[]>;

// Helper to build the key path that import.meta.glob uses
const faqPathFor = (lang: Lang) => `/src/lib/content/${lang}/legal/faq.json`;
const stepsPathFor = (lang: Lang) => `/src/lib/content/${lang}/legal/steps.json`;

export const load = async ({ parent }) => {
	// get current language from +layout
	const { lang } = (await parent()) as { lang: Lang };

	// choose localized version or fallback
	const faq = faqFiles[faqPathFor(lang)] ?? faqFiles[faqPathFor(DEFAULT_LANG)];

	const steps = stepsFiles[stepsPathFor(lang)] ?? stepsFiles[stepsPathFor(DEFAULT_LANG)];

	return { faq, steps };
};
