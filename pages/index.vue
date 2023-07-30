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

// 　同時に発火する場合に使う
// const list3 = [".fadeInTop", ".fadeInNews"];
// const targets = gsap.utils.toArray([list3])
// onMounted(() => targets.forEach((target: any) => { 
//                 gsap.from(target, {
//                 scrollTrigger: {
//                     trigger: target
//                 }, // .boxがビューポート内に入った時にアニメーションが開始。
//                 duration: 1.5,
//                 autoAlpha: 0,
//                 y: 100,
//                 })
//             })
//         )

onMounted(() => { gsap.from(".fadeInTop", {
                        scrollTrigger: ".fadeInTop", // .boxがビューポート内に入った時にアニメーションが開始。
                        duration: 1.5,
                        autoAlpha: 0,
                        y: 100,
                        })
                    });
onMounted(() => { gsap.from(".fadeInNews", {
    scrollTrigger: ".fadeInNews", // .boxがビューポート内に入った時にアニメーションが開始。
    duration: 1,
    autoAlpha: 0,
    y: 30,
    })
});

onMounted(() => { gsap.from(".fadeInConcept", {
    scrollTrigger: ".fadeInConcept", // .boxがビューポート内に入った時にアニメーションが開始。
    start: "middle center",
    scrub: 0.5,
    duration: 1.5,
    autoAlpha: 0,
    x: 350,
    })
});

onMounted(() => { gsap.from(".fadeInIntroduce", {
    scrollTrigger: ".fadeInIntroduce", // .boxがビューポート内に入った時にアニメーションが開始。
    start: "top center",
    scrub: 0.5,
    duration: 0.8,
    autoAlpha: 0,
    y: 30,
    })
});



//const isLoading:boolean = true;
//const start = () =>  loading.value = false;
//const finish = () => loading.value = true;

// mounted: {
//     window.onload = () => {
//         const start = () => show.value = true;
//         const finish = () => show.value = false;
//         console.log('Hello World!');
//     }
// };

//const isVisited = ref(session.value);
//const isVisited = (e: any) => e.target.onMounted();
//const refIsVisited = ref(isVisited);
// const flag = ref(false)
// const on = () => { flag.value = true }
// const off = () => { flag.value = false }

// watch(refIsVisited, () => {
//     setTimeout(on, 0)
//     setTimeout(off, 3000)
// })


const toNewsDetail = (news: string, id: string) => {
    navigateTo(`/news/${news.id}`)
};

const toNewsIndex = () => {
    navigateTo(`/news/list`)
};

const toGreeting = () => {
    navigateTo("/greeting")
};

const toContact = () => {
    navigateTo("/contact")
};
const toDevelopment = () => {
    navigateTo("/services")
}

// const toTop = () => {
//     goTo(0);
// }
// let navDrawerContent = ref()
// onMounted(()=> {
//   navDrawerContent.value = 
//    'myNavDrawer'.$el.querySelector('div.v-navigation-drawer__content');
// })

// const isShowGoToTopButton = ref(false);

// const onScroll = (event: Event) => {
//     if (typeof window === 'undefined') {
//       return;
//     }
//     let scrollTop = 0;
//     if (event.target instanceof HTMLInputElement) {
//       scrollTop = event.target.scrollTop;
//     }
//     const top = window.scrollY || scrollTop || 0;
//     isShowGoToTopButton.value = top > 20;
//   }

// const onClickGoToTopButton = () => {
//     $vuetify.value.goTo(0);
//   }

// onMounted(() => {(scrollTo, {
//   container: "body",// スクロールするcontainer
//   duration: 500, // スクロールアニメーションの長さ（ミリ秒）
//   easing: "ease", // 使用されるイージング
//   force: true,   // スクロールターゲットがすでに表示されている場合でも、スクロールを実行するかどうか。
//   cancelable: false // ユーザーがスクロールをキャンセルできるかどうか
// })}
// );

// const toTop = scrollBehavior = (to, from, savedPosition) => {
//     if (savedPosition) {
//       return savedPosition;
//     } else {
//       return { left: 0, top: 0 };
//     }
//   };
const drawer = ref();
</script>

<template>
   <div>
    <!-- <div class="ma-0 pa-0" style="min-height: 800px;"> -->
        <!-- <div class="fluid-colorful2"> -->
            <div class="top-parent" ma-0 pa-0 min-height="800px"></div>
            <div min-height="30vh">
                <div class="top-title">
                    <div class="top-topics top-lead">
                        <v-divider></v-divider>
                        <h1>
                            <span>with prosper</span>
                                <br>
                            <span>with pleasure</span>
                        </h1>
                    </div>
                </div>
            </div>
        <!-- </div> -->
        <!-- <div class="fluid-base" style="min-height: 300px;"></div> -->
        <div class="parallax-first" style="min-width: 2000px; min-height: 600px;"></div>
        <!-- <div class="fluid"></div>
        <div class="fluid2"></div> -->
        <!-- </div> -->
    <div class="fluid-colorful2" style="min-width: 2000px; min-height: 450px;"></div>
    <div class="niigata-image-container">
        <!-- <img class="niigata-image" src="~/assets/images/niigata-city.jpg"> -->
        <div ma-0 pa-0 class="fadeInConcept fluid-lead2 main-font" min-height="300px">
            <div class="greeting-arrows"></div>
            <h3><span>ソフトウェア開発会社として地域に根差して30余年</span></h3>
            <br>
            <span>これからもお客様の信頼を第一に考え</span>
            <br>
            <span>共に喜び共に成長することを志します</span>
            <div class="niigata-image-container-greeting">
                <button @click="toGreeting" class="main-button main-font">
                    <span class="greeting-button">ご挨拶</span><span class="greeting-button">→</span>
                </button>
            </div>
        </div>
    </div>
    <div class="parallax" style="min-width: 2000px; min-height: 600px;"></div>
    
    <div class="contact-background" style="width: 120%;">
          <v-sheet class="contact-background" min-height="30px">
              <div class="topics contact-box">
                  <h1>
                      お問い合わせ
                  </h1>
              </div>
          </v-sheet>
          <div class="contact-background" style="min-height: 300px;">
              <div class="contact-box">
                  <span>お仕事のご相談、お見積もりのご依頼など</span>
                      <br>
                  <span>お気軽にお問い合わせください</span>
              </div>
              <div class="contact-box2">
                  <button @click="toContact" class="reversal-main-button right-position reversal-main-font">
                      <span class="greeting-button">Contact</span><span class="greeting-button">→</span>
                  </button>
              </div>
          </div>
      </div>


          <!-- <v-sheet min-height="20vh"></v-sheet>
          <v-container>
            <v-row>
              <v-col>
                <div class="fluid-lead">
                  <h1>
                    <span>with prosper</span>
                      <br>
                    <span>with pleasure</span>
                  </h1>
                </div>
              </v-col>
              <v-col>
                  <div class="fluid"></div>
                  <div class="fluid2"></div>
              </v-col>
            </v-row>
          </v-container>
          <div class="font2">
              開発事例
          </div>
            <v-container>
              <v-carousel
                cycle
                height="600"
                hide-delimiter-background
                show-arrows="hover"
              >
              <div class="heading fadeRightTrigger fadeRight">
                Concept
              </div>
              <div class="lead fadeRightTrigger fadeRight">
                いつもそばにずっと
              </div>
                <v-carousel-item
                  v-for="(slide, index) in slides"
                  :key="index"
                  :src="slide.src"
                >
                  <v-sheet
                    height="100%"
                  >
                  <img :src="`../assets/images/${slide.name}.jpg`" style="width:1200px;height:auto;"/>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-container> -->
            <!-- <v-sheet class="news fadeLeftTrigger fadeLeft" min-width="60vh" min-height="30vh" rounded="lg">
              <h3>　お知らせ</h3>
              <v-row v-show="data?.contents.length === 0">
                    記事がありません
              </v-row>
              <v-list-item v-for="news in data?.contents" :key="news.id" class='padding'>
                  <NuxtLink :to="`/news/${news.id}`">
                    {{ news.category?.name }}
                  </NuxtLink>
              </v-list-item>
            </v-sheet> -->
        </div>
</template>

<style lang="scss" scoped>
.fluid-lead {
  font-family: sans-serif;
  letter-spacing: 1em;
  padding-top: 40px;
  animation-name: smoothAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  transform-origin: left;
  opacity: 0;
}

@keyframes smoothAnime {
  from {
    transform: translate3d(0, 100%, 0) skewY(12deg);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0) skewY(0);
    opacity: 1;
  }
}

.fluid {
  width: 40vh;
  height: 40vh;
  background: #b22222;
  animation: fluidrotate 30s ease 0s infinite;
  z-index: 10;
  text-align: right;
};

@keyframes fluidrotate {
  0%, 100% {
    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
  }
  14% {
    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
  }
  28% {
    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
  }
  42% {
    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
  }
  70% {
    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
  }
  84% {
    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
  }
}

.fluid2 {
  width: 30vh;
  height: 30vh;
  background: #333631;
  animation: fluidrotate2 30s ease 0s infinite;
  z-index: 9;
  margin: -170px 140px 0;
  text-align: right;
};

@keyframes fluidrotate2 {
  0%, 100% {
    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;
  }
  14% {
    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;
  }
  28% {
    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;
  }
  42% {
    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;
  }
  70% {
    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;
  }
  84% {
    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;
  }
};

.fluid-group {
  height: 60vh;
}

.font1 {
  font-family:"UD デジタル 教科書体 N-R", "BIZ UDゴシック Regular", "Hiragino Kaku Gothic ProN", "ascii";
}

.font2 {
  font-family: 'Rampart One', cursive;
}

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

// .slider-area {
//   width: 100%;
//   height: 70vh;
//   position: relative;
//   top: 0;
//   //left: 5%;
//   z-index: 3;
// };

// .slider {
//   overflow: hidden!important;
//   position: relative;
// 	max-width: 100%;
// 	height: 700px;
// };

// .image {
// 	position: absolute;
// 	width: 70%;
//   top: 5%;
//   left: 15%;
// 	opacity: 0;
// 	animation: change-img-anim 15s infinite;
// };

// .image:nth-of-type(1) {
// 	animation-delay: 1s;
// };
// .image:nth-of-type(2) {
// 	animation-delay: 5s;
// };
// .image:nth-of-type(3) {
// 	animation-delay: 10s;
// };

// @keyframes change-img-anim {
// 	0% { opacity: 0;}
// 	10% { opacity: 1;}
// 	90% { opacity: 1;}
// 	100% { opacity: 0;}
// };

.heading {
  font-family: "Alex Brush", cursive;
  font-size: 3.5rem;
  font-weight: normal;
  color: #b22222;
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
  color: white;
  letter-spacing: 0.2em;
  line-height: 1.6;
  writing-mode: vertical-rl;
  white-space: nowrap;
  z-index: 3;
};

// span {
//   display: block;
//   padding: 100px 0 0 0;
// };

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
