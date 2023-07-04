<script setup lang="ts">
import { links } from "~/datas/data"
</script>

<template>
  <v-app>
    <v-app-bar scroll-behavior="fade-image" image="/assets/images/inclusion.jpg" color="#4D2B43">
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          rounded="0"
          color="blue-darken-2"
          class="mr-12"
        >
          <v-img src="/assets/images/Thumbnail-CL-CRC-CR-002.png" width="0%" height="800%"/>
        </v-avatar>
        <div></div>
        <v-menu
          open-on-hover
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="white">
              会社概要
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(submenu, index) in links"
              :key="index"
              :to="submenu.path"
            >
              <v-list-item-title>
                {{ submenu.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div>
          <v-btn  color="white">
            開発事例
          </v-btn>
        </div>
        <div>
          <v-btn  color="white">
            サービス・製品
          </v-btn>
        </div>
        <div>
          <v-btn color="white">
            採用情報
          </v-btn>
        </div>
        <div>
          <v-btn color="white">
            お問い合わせ
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
  </v-app>
</template>
