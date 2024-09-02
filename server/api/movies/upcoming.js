export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { AccessToken } = config;

  const upComingUrl = 'https://api.themoviedb.org/3/movie/upcoming';
  const upComingMovies = await $fetch(upComingUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      language: 'zh-tw',
    },
  });

  return { upComingMovies };
});
