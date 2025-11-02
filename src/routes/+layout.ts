import type { Lang } from '$lib/i18n';

export const load = async ({ url }) => {
  const lang = (url.searchParams.get('lang') as Lang | null) ?? 'cs';
  return { lang };
};
