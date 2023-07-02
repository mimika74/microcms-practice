<script setup lang="ts">
import { News } from "~~/types/news";

const { params } = useRoute();
const { data } = await useMicroCMSGetListDetail<News>({
  endpoint: "news",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<template>
    
    {{ data.title }}
    <div v-html="data.content"></div>

</template>