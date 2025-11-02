import { addMessages, init } from 'svelte-i18n';
import en from './dictionaries/en.json';
import cs from './dictionaries/cs.json';

export const SUPPORTED = ['en', 'cs'] as const;
export type Lang = typeof SUPPORTED[number];
export const DEFAULT_LANG: Lang = 'cs';

// Load all dictionaries immediately
addMessages('en', en);
addMessages('cs', cs);

// Initialize immediately (sync) – no navigator, no async
init({
  fallbackLocale: DEFAULT_LANG,
  initialLocale: DEFAULT_LANG
});
