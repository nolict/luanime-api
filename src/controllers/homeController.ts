import { animeScraperService, type AnimeHome } from '../services/animeScraperService';

interface HomeResponse {
  status: string;
  data: AnimeHome[];
}

export async function homeController(): Promise<HomeResponse> {
  const data = await animeScraperService.fetchHomeAnime();
  return {
    status: 'ok',
    data,
  };
}
