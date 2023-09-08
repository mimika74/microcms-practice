<script setup lang="ts">
import { lists, lists2, navDrawer } from "~/datas/data"

const drawer = ref(null);
</script>

<template>
    <v-app>
        <v-navigation-drawer
            v-model="drawer"
            class="nav-drawer"
            temporary
            >
            <div class="drawer-button">
                <v-icon
                    x-large
                    variant="text"
                    @click.stop="drawer = !drawer">
                    mdi-close-box
                </v-icon>
            </div>
            <v-list class="drawer-position">
                <v-list-item
                v-for="item in navDrawer"
                :key="item.title"
                link
                >
                <v-list-item-content>
                    <v-list-item-title class="header-font">
                        <NuxtLink :to=item.path class="header-font">
                            <div style="color: #e8d3d1;">
                                {{ item.title }}
                            </div>
                        </NuxtLink>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar elevation="0" color="#9d5b8b">
            <v-container id="#scrolling-techniques-8" class="fill-height align-center d-block d-sm-none" style="padding: 0;" no-gutters> 
                <div style="position: relative">
                    <v-btn class="logo" href="/">
                        <img src="~~/assets/images/logo.png" style="width: 200px; height: auto; border-radius: 5rem;"/>
                    </v-btn>
                    <v-app-bar-nav-icon
                            style=""
                            class="open-drawer-button"
                            variant="text"
                            @click.stop="drawer = !drawer">
                    </v-app-bar-nav-icon>
                </div>
            </v-container>
            <div class="d-none d-md-block">
                <v-container id="#scrolling-techniques-8" class="fill-height align-center">
                        <div>
                            <v-btn class="logo" href="/">
                                <img src="~~/assets/images/logo.png" style="width: 100px; height: auto; border-radius: 5rem;"/>
                            </v-btn>
                        </div>
                    <div class="d-flex">
                        <v-col>
                            <v-btn variant="plain" class="header-font" href="/services">
                                <div class="marker">サービスについて</div>
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-btn variant="plain" class="header-font" href="/dx">
                                <div class="marker">製品について</div>
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-menu open-on-hover>
                                <template v-slot:activator="{ props }">
                                    <v-btn :ripple="false" variant="plain" class="header-font" v-bind="props" href="/company">
                                        <div class="marker">私たちについて</div>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(submenu, index) in lists"
                                        :key="index"
                                        :to="submenu.path"
                                    >
                                        <v-list-item-title class="header-hover-font marker">
                                            {{ submenu.title }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                        <v-col>
                            <v-btn variant="plain" class="header-font" href="/recruite">
                                <div class="marker">採用について</div>
                                <v-menu activator="parent" open-on-hover>
                                    <v-list>
                                        <v-list-item
                                            v-for="(submenu, index) in lists2"
                                            :key="index"
                                            :to="submenu.path"
                                                >
                                            <v-list-item-title class="header-hover-font marker">
                                                {{ submenu.title }}
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-btn variant="plain" class="header-font" href="/contact">
                                <div class="marker">お問い合わせ</div>
                            </v-btn>
                        </v-col>
                    </div>
                </v-container>
            </div>
        </v-app-bar>
        <v-main class="ma-0 pa-0">
            <slot />
        </v-main>
        <Footer class="ma-0 pa-0" />
    </v-app>
</template>

<styles lang="scss" scoped>
.open-drawer-button {
    color: #9d5b8b;
    font-size: 30px;
    position: absolute;
    z-index: 200;
    text-align: right;
    top: -5px;
    right: 10px;
}

.drawer-position {
    text-align: center;
}

.nav-drawer {
    min-width: 100%;
    background: #333631;
}

.drawer-button {
    text-align: right;
    color: #e597b2;
    font-size: 40px;
    margin: 10px;
}

@media screen and (max-width: 480px) {
    .logo {
        display: block;
        justify-content: center;
    }
}

.marker {
   display: inline;
   transition: all 0.4s ease;
   background-repeat: no-repeat;
   background-position: left bottom; 
   background-size: 0 10%;
   background-image: linear-gradient(30deg, #e597b2, #e597b2);
}

.marker:hover {
  background-size: 100% 10%;
}

.header-font {
    font-family: 'Zen Maru Gothic', sans-serif;
    font-weight: bold;
    color: #e5abbe;
}

.header-hover-font {
    font-family: 'Zen Maru Gothic', sans-serif;
    font-weight: bold;
}

.logo {
    margin-top: 10px;
}

.logo:hover {
    top: -1px;
    transition: top 1s ease 0s;
}

.header-background {
    padding: 0;
}
</styles>