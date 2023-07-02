<script setup="ts">
// import { News } from "~~/types/news";
// const { data } = await useMicroCMSGetList<News>({
//   endpoint: "news",
// });

</script>


<template>
  <div>
    <!-- <v-app>
      <v-sheet class="news fadeLeftTrigger fadeLeft" min-width="60vh" min-height="30vh" rounded="lg">
        <h2>　お知らせ</h2>
        <div v-show="data?.contents.length === 0">
              記事がありません
        </div>
        <div v-for="news in data?.contents" :key="news.id" class='padding'>
            <NuxtLink :to="`/news/${news.id}`">
              {{ news.category?.name }}
            </NuxtLink>
        </div>
      </v-sheet>
    </v-app> -->
  </div>
</template>