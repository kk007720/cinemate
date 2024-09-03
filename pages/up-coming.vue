<template>
  <div class="md:p-6 p-3">
    <section>
      <h1
        class="mb-4 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
      >
        即將上映電影
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
  </div>
</template>

<script setup>
  useSeoMeta({
    title: '即將上映',
  });

  const movies = useState(() => []);

  const { data } = useFetch('/api/movies/upcoming', {
    transform: (data) => {
      movies.value = data.upComingMovies.results;
    },
  });
</script>
