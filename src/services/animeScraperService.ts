import { load } from 'cheerio';
import { config } from '../config/config';

export interface AnimeHome {
  title: string
  slug: string
  imageUrl: string
  episode: string
}

export const animeScraperService = {
  async fetchHomeAnime(): Promise<AnimeHome[]> {
    const timeout = Number.isFinite(config.scraperTimeout) ? config.scraperTimeout : 10000;

    try {
      const response = await fetch(config.scraperBaseUrl, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        signal: AbortSignal.timeout(timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const html = await response.text();
      const $ = load(html);
      const animeList: AnimeHome[] = [];

      $('article.animeseries').each((_, element) => {
        const title = $(element).find('h3.title span').text().trim();
        const href = $(element).find('a').attr('href');
        const imageUrl = $(element).find('img').attr('src') || '';
        const episodeText = $(element).find('.types.episodes').text().trim();

        if (href && title) {
          let slug = href.replace(config.scraperBaseUrl, '').replace(/\/$/, '');
          slug = slug.replace(/^anime\//, '').replace(/^\//, '');

          animeList.push({
            title,
            slug,
            imageUrl,
            episode: episodeText,
          });
        }
      });

      return animeList;
    } catch (error) {
      if (error instanceof Error && error.name === 'TimeoutError') {
        throw new Error('Scraper request timed out');
      }
      throw error;
    }
  },
};
