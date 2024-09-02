export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;
  const topRatedMovieUrl = 'https://api.themoviedb.org/3/movie/top_rated';
  const topRatedSeriesUrl = 'https://api.themoviedb.org/3/tv/top_rated';

  const topRatedMovies = await $fetch(topRatedMovieUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      language: 'zh-TW',
    },
  });

  const topRatedSeries = await $fetch(topRatedSeriesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      language: 'zh-TW',
    },
  });

  return { topRatedMovies, topRatedSeries };
});
