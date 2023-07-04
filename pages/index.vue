<script setup lang="ts">
import { News } from "~~/types/news";
import { links } from "~/datas/data";
import { slides } from "~/datas/data";

const { data } = await useMicroCMSGetList<News>({
  endpoint: "news",
});
// const isVisit = () => {}
 const flag = ref(false);
// const on = () => { flag.value = true };
// const off = () => { flag.value = false };

// const open = ref()
// const isOpen = () => {
//     open.value = !open.value
// };
</script>

<template>
  <Header />
    <v-container>
      <!-- <v-sheet>
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="n in 8" :key="n">
            <v-card style="margin: 0 20px 0 0; width: 320px; height: 240px;">
              <v-img class="white--text align-end" height="120px" src="********.png">
              <v-card-title>sample title {{ n }}</v-card-title>
              <v-card-text class="text--primary">
              {{ n }}番目のカードテキスト
              </v-card-text>
            </v-card>
          <v-slide-item>
        </v-slide-group>
      </v-sheet> -->
      <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows="hover"
      >
      <div class="heading fadeRightTrigger fadeRight">
        Concept
      </div>
      <div class="lead fadeRightTrigger fadeRight" color="white">
        いつもそばに<span>ずっと</span>
      </div>
        <v-carousel-item
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.src"
        >
          <v-sheet
            height="100%"
          >
          <img :src="`../assets/images/${slide.name}.jpg`"/>
          </v-sheet>
        </v-carousel-item>
              <v-sheet class="news fadeLeftTrigger fadeLeft" min-width="60vh" min-height="30vh" rounded="lg">
        <h3>　お知らせ</h3>
        <v-row v-show="data?.contents.length === 0">
              記事がありません
        </v-row>
        <v-list-item v-for="news in data?.contents" :key="news.id" class='padding'>
            <NuxtLink :to="`/news/${news.id}`">
              {{ news.category?.name }}
            </NuxtLink>
        </v-list-item>
      </v-sheet>
      </v-carousel>

    </v-container>
      <!-- <v-sheet class="slider-area">
        <div class="slider">
          <v-img class="image" src="~~/assets/images/main_01.jpg" />
          <v-img class="image" src="~~/assets/images/main_02.jpg" />
          <v-img class="image" src="~~/assets/images/main_03.jpg" />
        </div>
      </v-sheet> -->

</template>

<style lang="scss" scoped>
// .b {
//     display: block;
// };

// .c {
//   //display: none;
//   position: absolute;
//   top: 70px;
//   width: 100px;
//   height: 100px;
//   left: 70px;
// };
// .d {
//   //display: none;
//   position: absolute;
//   top: 70px;
//   width:100px;
//   height: 100px;
//   left: 70px;
// };

// .c {
//  display: none;
// };

// .b:hover .c {
//   background-color: pink;
//   color: #444;
//   display: block;
// };

// .b:hover .c {
//   background-color: blue;
//   color: #444;
//   display: block;
// };


.padding {
  margin-top: 20px;
  margin-left: 30px;
};

.splash {
	position: fixed;
	width: 100%;
	height: 100%;
	background:#182578;
	z-index: 9999999;
	text-align:center;
	color:#fff;
};

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
};

/*bodyにappearクラスがついたら出現*/
.splashbg1-enter,
.splashbg2-enter {
	display: block;
};

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
};

@keyframes PageAnime{
	0% {
		transform-origin: top;
		transform: scaleY(1);
	}

	100% {
		transform-origin: top;
		transform: scaleY(0);
	}
};

@keyframes splashbg2 {
  0% {
		transform-origin: bottom;
		transform: scaleY(1);
	}
	100% {
		transform-origin: bottom;
		transform: scaleY(0);
	}
};
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
};

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
// #app {
// 	opacity: 0;/*はじめは透過0に*/
//     position: relative;
//     z-index: 1;
// }

/*bodyにappearクラスがついたら出現*/
.splashbg2-enter {
	animation-name: PageAnimeAppear;
	animation-duration: 1s;
	animation-delay: 0.2s;
	animation-fill-mode: forwards;
	opacity: 0;
};

@keyframes splashbg2 {
	0% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
  }
};

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
};

@keyframes fadeUpAnime{
  from {
    opacity: 0;
	  transform: translateY(100px);
  }

  to {
    opacity: 1;
	  transform: translateY(0);
  }
};

.bar-btn {
  font-family: "Noto Serif JP", serif;
};

.first-view {
  position: relative;
  height: 100vh;
};

.slider-area {
  width: 100%;
  height: 70vh;
  position: relative;
  top: 0;
  //left: 5%;
  z-index: 3;
};

.slider {
  overflow: hidden!important;
  position: relative;
	max-width: 100%;
	height: 700px;
};

.image {
	position: absolute;
	width: 70%;
  top: 5%;
  left: 15%;
	opacity: 0;
	animation: change-img-anim 15s infinite;
};

.image:nth-of-type(1) {
	animation-delay: 1s;
};
.image:nth-of-type(2) {
	animation-delay: 5s;
};
.image:nth-of-type(3) {
	animation-delay: 10s;
};

@keyframes change-img-anim {
	0% { opacity: 0;}
	10% { opacity: 1;}
	90% { opacity: 1;}
	100% { opacity: 0;}
};

.heading {
  font-family: "Alex Brush", cursive;
  font-size: 3.5rem;
  font-weight: normal;
  color: #DC2314;
  position: absolute;
  top: 100px;
  right: 5%;
  z-index: 3;
  animation-delay: 0.3s;
};

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
};

span {
  display: block;
  padding: 100px 0 0 0;
};

.news {
  font-family: "Noto Serif JP", serif;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #FFF;
  z-index: 5;
  padding: 40px;
};

.fadeLeftTrigger {
  opacity: 0;
};

.fadeLeft {
  animation-name: fadeLeftAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
};

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
};

.fadeRightTrigger {
  opacity: 0;
};

.fadeRight {
  animation-name: fadeRightAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
};

@keyframes fadeRightAnime {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
};

</style>
