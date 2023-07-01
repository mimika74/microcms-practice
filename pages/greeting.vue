<template>
<div>
  <v-app>
      <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
          <v-avatar
            class="me-10 ms-4"
            color="grey-darken-1"
            size="32"
            >
            <img src="~/assets/images/Thumbnail-CL-CRC-CR-002.png" />
          </v-avatar>

        <div class="text-center">
          <v-menu
          open-on-hover
          >
            <template :activator="{ props }">
              <v-btn
                class="bar-btn"
                v-bind="props"
                href="/financial"
              >
                会社概要
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(submenu, index) in links2"
                :key="index"
                link :to="submenu.link"
              >
                <v-list-item-title>
                  {{ submenu.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div>
          <v-btn href="/greeting">
              開発実績
          </v-btn>
        </div>
        <div>
          <v-btn href="/greeting">
            お問い合わせ
          </v-btn>
        </div>

          <v-spacer></v-spacer>

          <!-- <v-responsive max-width="260">
            <v-text-field
              density="compact"
              hide-details
              variant="solo"
            ></v-text-field>
          </v-responsive> -->
        </v-container>
      </v-app-bar>
  </v-app>
  greeting
</div>
</template>
