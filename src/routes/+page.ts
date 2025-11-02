import type { ArticleData, HomePointData } from '$lib/types';
import articleDataRaw from '$lib/content/home/articles.json';
import homePointsRaw from '$lib/content/home/points.json';

export const load = async () => {
  const articles = articleDataRaw as ArticleData[];
  const homePoints = homePointsRaw as HomePointData[];
  return { articles, homePoints };
};




