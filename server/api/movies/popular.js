export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular';
  const popularSeriesUrl = 'https://api.themoviedb.org/3/tv/popular';

  const popularMovies = await $fetch(popularMoviesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      language: 'zh-tw',
    },
  });

  const popularSeries = await $fetch(popularSeriesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      language: 'zh-tw',
    },
  });
  return { popularMovies, popularSeries };
});
