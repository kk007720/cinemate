<template>
  <div class="md:p-6 p-3">
    <section>
      <h1
        class="mb-4 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
      >
        精選電影
      </h1>
      <ul
        class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
      >
        <li v-for="mov in movies" :key="mov.id">
          <MovieCard
            :poster_path="mov.poster_path"
            :title="mov.title"
            :id="mov.id"
            :overview="mov.overview"
            :release_date="mov.release_date"
            :popularity="mov.popularity"
            :item="mov"
          ></MovieCard>
        </li>
      </ul>
    </section>
    <section class="mt-6">
      <h1
        class="mb-4 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
      >
        精選電視劇
      </h1>
      <ul
        class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
      >
        <li v-for="tvSeries in series" :key="tvSeries.id">
          <SeriesCard
            :poster_path="tvSeries.poster_path"
            :title="tvSeries.name"
            :id="tvSeries.id"
            :overview="tvSeries.overview"
            :first_air_date="tvSeries.first_air_date"
            :popularity="tvSeries.popularity"
            :item="tvSeries"
          >
          </SeriesCard>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
  useSeoMeta({
    title: 'Cinemate',
    ogTitle: 'Cinemate',
    description: '精選電影賞析, made by kk.kuo',
  });
  const movies = useState(() => []);
  const series = useState(() => []);

  const { data } = useFetch('/api/movies/discover', {
    transform: (data) => {
      movies.value = data.movies.results;
      series.value = data.series.results;
      return data;
    },
  });
</script>
