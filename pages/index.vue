<script setup lang="ts">
import { News } from "~~/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
});
</script>

<template>
  <div>
    <h1>Top</h1>
    <div v-show="data?.contents.length === 0">
          記事がありません
      </div>
    <div v-for="news in data?.contents" :key="news.id">
      <div>
        {{ news.category?.name }}
      </div>
      <div>
        <NuxtLink :to="`/${news.id}`">
          {{ news.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
