<template>
  <div class="md:p-6 p-3">
    <form class="max-w-md mx-auto">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >搜尋</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          v-model="searchTerm"
          type="text"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="搜尋影片、電視劇..."
          required
        />
      </div>
    </form>

    <section class="mt-6">
      <h1
        v-if="movies.length"
        class="mb-4 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
      >
        電影結果
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
        v-if="series.length"
        class="mb-4 md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white"
      >
        電視劇結果
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
    title: '搜尋電影、電視劇',
  });

  const searchTerm = useState('searchTerm', () => '');

  const movies = useState(() => []);
  const series = useState(() => []);

  const { data } = useFetch('/api/movies/search', {
    query: {
      searchTerm,
    },
    immediate: false,
    transform: (data) => {
      movies.value = data.movies.results;
      series.value = data.series.results;
    },
  });
</script>
