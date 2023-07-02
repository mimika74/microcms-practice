<script setup lang="ts">
import { links } from "~/datas/data"
</script>

<template>
  <v-app>
    <v-app-bar>
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
    </v-app-bar>
  </v-app>
</template>
