<script setup lang="ts">
import { News } from "~~/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
});

const links = ['会社概要', '開発事例', 'サービス・製品', '採用情報', 'お問い合わせ'];
</script>

<template>
  <div>
    <v-app>
      <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
          <v-avatar
            class="me-10 ms-4"
            color="grey-darken-1"
            size="32"
          ></v-avatar>

          <v-btn
            v-for="link in links"
            :key="link"
            variant="text"
          >
            {{ link }}
          </v-btn>

          <v-spacer></v-spacer>

          <v-responsive max-width="260">
            <v-text-field
              density="compact"
              hide-details
              variant="solo"
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-sheet min-height="70vh" rounded="lg"></v-sheet>
        </v-container>
        <v-container>
          <v-sheet min-height="70vh" rounded="lg">
            <h2>　お知らせ</h2>
            <div v-show="data?.contents.length === 0">
                  記事がありません
            </div>
            <div v-for="news in data?.contents" :key="news.id" class='padding'>
              <div>
                {{ news.category?.name }}
                <NuxtLink :to="`/${news.id}`">
                  {{ news.title }}
                </NuxtLink>
              </div>
            </div>
          </v-sheet>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss" scoped>
.padding {
  margin-top: 20px;
  margin-left: 30px;
}
</style>
