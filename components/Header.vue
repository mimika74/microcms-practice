<script setup lang="ts">
import { links } from "~/datas/data"
</script>

<template>
  <v-app-bar>
    <v-container class="fill-height d-flex align-center">
      <!-- <v-avatar
        rounded="0"
        color="blue-darken-2"
        class="mr-12"
      >
        <v-img src="/assets/images/Thumbnail-CL-CRC-CR-002.png" width="0%" height="800%"/>
      </v-avatar> -->
      <div class="font1">CompanyLogo</div>
      <v-menu
        open-on-hover
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
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
        <v-btn>
          開発事例
        </v-btn>
      </div>
      <div>
        <v-btn>
          サービス・製品
        </v-btn>
      </div>
      <div>
        <v-btn>
          採用情報
        </v-btn>
      </div>
      <div>
        <v-btn>
          お問い合わせ
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.font1 {
  font-family:"UD デジタル 教科書体 N-R", "BIZ UDゴシック Regular", "Hiragino Kaku Gothic ProN", "ascii";
}

</style>
