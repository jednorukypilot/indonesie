import type { ArticleData, HomePointData } from '$lib/types';
import articleDataRaw from '$lib/content/home/articles.json';

export const load = async () => {
  const articles = articleDataRaw as ArticleData[]
  return { articles };
};




