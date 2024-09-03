<template>
  <div
    class="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <NuxtLink @click="changeItemState(item)" :to="`/item/${id}`">
      <NuxtImg
        class="rounded-t-lg w-full object-cover"
        :src="`${imageSiteUrl}${poster_path}`"
        alt="itemImage"
      />
    </NuxtLink>
    <div class="p-5 flex flex-col flex-grow">
      <NuxtLink href="#">
        <h5
          class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ title }}
        </h5>
      </NuxtLink>
      <p class="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
        發布日期: {{ release_date }}
      </p>
      <div>
        <p
          v-if="overview"
          class="w-full inline-flex items-center py-2 text-sm font-medium text-center bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 overflow-hidden"
        >
          {{ overview }}
        </p>
        <p
          v-else
          class="w-full inline-flex items-center py-2 text-sm font-medium text-center bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          No overview available
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps([
    'title',
    'id',
    'overview',
    'release_date',
    'popularity',
    'poster_path',
    'item',
  ]);

  const imageSiteUrl = 'https://image.tmdb.org/t/p/w500';
  const itemState = useState('chosenItem', () => {});
  const changeItemState = (item) => {
    itemState.value = item;
  };
</script>
