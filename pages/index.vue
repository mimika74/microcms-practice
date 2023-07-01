<script setup lang="ts">
import { News } from "~~/types/news";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
});

const links = ['会社概要', '開発事例', 'サービス・製品', '採用情報', 'お問い合わせ'];
const links2= [ { title: 'ご挨拶', active: false, path: '/greeting'},
                { title: 'アクセス', active: false, path: '/access'},
                { title: '決算報告',  active: false, path: '/financial'},
                { title: '情報セキュリティ基本方針', active: false, path: '/financial'},
                { title: '個人情報保護方針', active: false, path: '/financial'}];

// const isVisit = () => {}
// const flag = ref(false);
// const on = () => { flag.value = true };
// const off = () => { flag.value = false };
// watch (isVisit, () => {

// })


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
            >
            <img src="~/assets/images/Thumbnail-CL-CRC-CR-002.png" />
          </v-avatar>

          <div class="text-center">
            <v-menu
            permanent
            open-on-hover
            >
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  class="bar-btn"
                >
                  会社概要
                </v-btn>
              </template>
                <v-list>
                  <v-list-item
                    v-for="submenu in links2"
                    :key="submenu.title"
                    :to="submenu.path"
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
      <v-main class="bg-grey-lighten-3">
          <div v-if="flag" class="splash">
            <div name="splash-logo">
              <div class="fadeUp">
                ●●●株式会社
              </div>
            </div>
          </div>
          <v-tabs v-model="lists2"></v-tabs>
      <!-- <div class="splashbg1"></div> -->
      <!-- <transition name="splashbg2"></transition> -->
        <div>
          <div class="first-view">
            <div class="slider-area">
              <div class="slider">
                <img class="image" src="~~/assets/images/main_01.jpg" />
                <img class="image" src="~~/assets/images/main_02.jpg" />
                <img class="image" src="~~/assets/images/main_03.jpg" />
              </div>
            </div>
            <h2 class="heading fadeRightTrigger fadeRight">Concept</h2>
            <p class="lead fadeRightTrigger fadeRight">
              いつもそばに<span>ずっと</span>
            </p>
            <v-sheet class="news fadeLeftTrigger fadeLeft" min-width="60vh" min-height="30vh" rounded="lg">
              <h2>　お知らせ</h2>
              <div v-show="data?.contents.length === 0">
                    記事がありません
              </div>
              <div v-for="news in data?.contents" :key="news.id" class='padding'>
                <div>
                  <NuxtLink :to="`/${news.id}`">
                   {{ news.category?.name }}
                  </NuxtLink>
                </div>
              </div>
            </v-sheet>
          </div>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss" scoped>
.padding {
  margin-top: 20px;
  margin-left: 30px;
}

.splash {
	position: fixed;
	width: 100%;
	height: 100%;
	background:#182578;
	z-index: 9999999;
	text-align:center;
	color:#fff;
}

// .splash-logo {
// 	  position: absolute;
// 	  top: 50%;
// 	  left: 50%;
// 	  transform: translate(-50%, -50%);
//     font-size: 1.2rem;
//     letter-spacing: 0.2em;
// }

.splashbg1,
.splashbg2{
    display: none;
}

/*bodyにappearクラスがついたら出現*/
.splashbg1-enter,
.splashbg2-enter {
	display: block;
}

/*上に消えるエリア*/
.splashbg1{
	  animation-name: PageAnime;
	  animation-duration: 1.4s;
	  animation-timing-function: ease-in-out;
	  animation-fill-mode: forwards;
    content: "";
    position: fixed;
	  z-index: 999;
    width: 100%;
    height: 100vh;
    bottom: 50%;
	  left:0;
    transform: scaleY(1);
    background-color:#182578;/*伸びる背景色の設定*/
}

@keyframes PageAnime{
	0% {
		transform-origin: top;
		transform: scaleY(1);
	}

	100% {
		transform-origin: top;
		transform: scaleY(0);
	}
}

@keyframes splashbg2 {
  0% {
		transform-origin: bottom;
		transform: scaleY(1);
	}
	100% {
		transform-origin: bottom;
		transform: scaleY(0);
	}
}
/*下に消えるエリア*/
.splashbg2-enter-active {
    //animation-name: PageAnime2;
	  animation-duration: 1.4s;
	  animation-timing-function: ease-in-out;
	  animation-fill-mode: forwards;
    content: "";
    position: fixed;
	  z-index: 999;
    width: 100%;
    height: 100vh;
    top: 50%;
	  left: 0;
    //transform: scaleY(1);
    background-color: #182578;/*伸びる背景色の設定*/
}

// @keyframes PageAnime2 {
// 	0% {
// 		transform-origin: bottom;
// 		transform: scaleY(1);
// 	}
// 	100% {
// 		transform-origin: bottom;
// 		transform: scaleY(0);
// 	}
// }

/*画面遷移の後現れるコンテンツ設定*/
#app {
	opacity: 0;/*はじめは透過0に*/
    position: relative;
    z-index: 1;
}

/*bodyにappearクラスがついたら出現*/
.splashbg2-enter {
	animation-name: PageAnimeAppear;
	animation-duration: 1s;
	animation-delay: 0.2s;
	animation-fill-mode: forwards;
	opacity: 0;
}

@keyframes splashbg2 {
	0% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
  }
}

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime{
  from {
    opacity: 0;
	  transform: translateY(100px);
  }

  to {
    opacity: 1;
	  transform: translateY(0);
  }
}

.bar-btn {
  font-family: "Noto Serif JP", serif;
}

.first-view {
  position: relative;
  height: 100vh;
}

.slider-area {
  width: 100%;
  height: 70vh;
  position: relative;
  top: 0;
  //left: 5%;
  z-index: 3;
}

.slider {
  overflow: hidden!important;
  position: relative;
	max-width: 100%;
	height: 700px;
}

.image {
	position: absolute;
	width: 70%;
  top: 5%;
  left: 15%;
	opacity: 0;
	animation: change-img-anim 15s infinite;
}

.image:nth-of-type(1) {
	animation-delay: 1s;
}
.image:nth-of-type(2) {
	animation-delay: 5s;
}
.image:nth-of-type(3) {
	animation-delay: 10s;
}

@keyframes change-img-anim {
	0% { opacity: 0;}
	10% { opacity: 1;}
	90% { opacity: 1;}
	100% { opacity: 0;}
}

.heading {
  font-family: "Alex Brush", cursive;
  font-size: 3.5rem;
  font-weight: normal;
  color: #182578;
  position: absolute;
  top: 100px;
  right: 5%;
  z-index: 3;
  animation-delay: 0.3s;
}

.lead {
  font-family: "Noto Serif JP", serif;
  position: absolute;
  top: 320px;
  right: 9%;
  font-size: 1.6rem;
  letter-spacing: 0.2em;
  line-height: 1.6;
  writing-mode: vertical-rl;
  white-space: nowrap;
  z-index: 3;
}

span {
  display: block;
  padding: 100px 0 0 0;
}

.news {
  font-family: "Noto Serif JP", serif;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #FFF;
  z-index: 5;
  padding: 40px;
}

.fadeLeftTrigger {
  opacity: 0;
}

.fadeLeft {
  animation-name: fadeLeftAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes fadeLeftAnime {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  // 70% {
  //   opacity: 0;
  // }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeRightTrigger {
  opacity: 0;
}

.fadeRight {
  animation-name: fadeRightAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fadeRightAnime {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
