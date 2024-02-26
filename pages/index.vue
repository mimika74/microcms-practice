<script setup lang="ts">
import { News } from "~~/types/news";
import gsap from 'gsap';
import { lists, lists2 } from "~/datas/data"


definePageMeta({
  pageTransition: {
    name: "fade",
    mode: "out-in",
    appear: false,
    duration: 1000,
  },
});

const { data } = await useMicroCMSGetList<News>({
    endpoint: "news",
});


onMounted(() => { gsap.from(".fadeInTop", {
                        scrollTrigger: ".fadeInTop",
                        duration: 1.5,
                        autoAlpha: 0,
                        y: 100,
                        })
                    });
onMounted(() => { gsap.from(".fadeInNews", {
    scrollTrigger: ".fadeInNews",
    duration: 1,
    autoAlpha: 0,
    y: 30,
    })
});

onMounted(() => { gsap.from(".fadeInGreeting", {
    scrollTrigger: ".fadeInGreeting",
    start: "middle center",
    scrub: 0.5,
    duration: 1.5,
    autoAlpha: 0,
    y: 30,
    })
});

onMounted(() => { gsap.from(".fadeInIntroduce", {
    scrollTrigger: ".fadeInIntroduce",
    start: "top center",
    scrub: 0.5,
    duration: 2,
    autoAlpha: 0,
    y: 30,
    })
});

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

const drawer = ref();
const isActive =ref(true)
</script>

<template>
    <v-container class="pa-0 ma-0" style="overflow: hidden; max-width: 2000px;">
            <div class="top-parent" ma-0 pa-0 min-height="800px"></div>
            <div min-height="30vh">
                <div class="top-title">
                    <div class="top-topics top-lead" style="margin: 0 auto; padding-top: 80px; width: 80%;">
                        <h1 style="font-family: 'Rock Salt', cursive;">
                            <span>Sample Inc.</span>
                                <br>
                            <span>sample message</span>
                        </h1>
                    </div>
                </div>
            </div>
        <div class="parallax-first"></div>
        <div class="fadeInGreeting company-message-container">
            <div class="company-message main-font">
                    <h3><span>main message</span></h3>
                        <br>
                    <span>company<br>messeage</span>
                        <br>
                    <span>test<br>test</span>
                    <div>
                        <button @click="toGreeting" class="reversal-main2-button">
                            <span style="font-weight: blod;">ご挨拶</span><v-icon>mdi-arrow-right-thin</v-icon>
                        </button>
                    </div>
            </div>
        </div>
        <div class="strong-contents">
            <div min-height="100px">
                <div class="contents-title main-font" style="width: 80%;">
                    <h1 style="color: #e5abbe;">
                        Product
                    </h1>
                </div>
            </div>
            <div class="main-contents-container" style="width: 80%;">
                <span>私たちの製品</span><br>
                <span>心を込めて</span><br>
                <span>つくっています</span>
                <div class="main-introduce-box">
                    <button @click="toDevelopment" class="reversal-main-button reversal-main-font" style="font-weight: bold;">
                        <span>製品情報はこちら</span><v-icon>mdi-arrow-right-thin</v-icon>
                    </button>
                </div>
            </div>
            <div class="fadeInIntroduce development-image" style=" display: flex; justify-content: center;">
                <v-row>
                    <v-col>
                        <div><img style="width: 100%; heght: auto;" src="~/assets/images/25038056_s.png" /></div>
                    </v-col>
                    <v-col>
                        <div><img style="width: 100%; heght: auto;" src="~/assets/images/sample.png" /></div>
                    </v-col>
                    <v-col>
                        <div><img  style="width: 100%; heght: auto;" src="~/assets/images/25038056_s.png" /></div>
                    </v-col>
                </v-row>
            </div>
        </div>
        <v-sapacer min-height="200px"></v-sapacer>
        <div class="news-band fade" style="overflow: hidden;">
            <div class="fadeInNews news-container">
                <div min-height="100px" style="margin: 20px auto; width: 70%;">
                    <div class="contents-title main-font">
                        <h1 style="color: #9d5b8b;">
                            NEWS
                        </h1>
                    </div>
                </div>

                <v-slide-group
                class="news-container-child"
                selected-class="bg-success"
                show-arrows
                style="position: relative"
                >
                    <v-slide-group-item
                        v-for="news in data?.contents" :key="news.id"
                        v-slot="{ isSelected, selectedClass }"
                    >
                        <v-card
                        color="#CCC"
                        :class="['ma-4', 'px-4', 'py-2', selectedClass]"
                        height="350"
                        width="280"
                        @click="toNewsDetail(news, id)"
                        >
                        <div class="zoomIn">
                            <span class="mask">
                                <img style="width: 150; height: auto;" src="~~/assets/images/big-logo-icon.png" />
                            </span>
                        </div>
                            <v-scale-transition>
                            <v-icon
                                v-if="isSelected"
                                color="white"
                                size="48"
                                icon="mdi-close-circle-outline"
                            ></v-icon>
                            </v-scale-transition>
                            <div class="main-font">
                                {{ news.publishedAt }}
                            </div>
                            <div class="main-font">
                                {{ news.title }}
                            </div>
                            <div v-show="news.category">
                                <v-chip
                                    class="ma-2"
                                    color="indigo"
                                    text-color="white"
                                    >
                                    {{ news.category?.name }}
                                </v-chip>
                            </div>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>
                <div class="main-introduce-box" style="margin: 20px auto; width: 70%;">
                    <button @click="toNewsIndex" class="main-button main-font" style="font-weight: bold;">
                        <span>一覧はこちら</span><v-icon>mdi-arrow-right-thin</v-icon>
                    </button>
                </div>
            </div>
        </div>
        <div class="strong-contents">
            <div class="contact-container" min-height="100px">
                <div class="contents-title main-font" style="margin: 20px auto; width: 70%;">
                    <h1 style="color: #f8f8FF;">
                        お問い合わせ
                    </h1>
                </div>
            </div>
            <v-container class="contact-container">
                <v-row style="display: block;">
                    <v-col style="margin: 10px auto; text-align: center;">
                        <div>
                            <span>ご相談、ご依頼など</span>
                                <br>
                            <span>お気軽にお問い合わせください</span>
                        </div>
                        <div style="margin: 30px auto;">
                            <h1><a href="tel:00000000000000"><span>000-000-0000</span></a></h1>
                            <span>※平日9:00~17:00</span>
                        </div>
                        <div>Webからのお問い合わせはこちら</div>
                        <div>
                            <button @click="toContact" class="reversal-main-button reversal-main-font" style="font-weight: bold;">
                                <span>Contact</span><v-icon>mdi-arrow-right-thin</v-icon>
                            </button>
                        </div>
                    </v-col>
                    <v-col style="text-align: center; margin: 0 auto">
                        <div class="contact-access">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12591.148385300776!2d139.061775!3d37.9120388!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c99ae88a6b01%3A0x3b1d928b98b9a3ea!2z5paw5r2f6aeF!5e0!3m2!1sja!2sjp!4v1694157841154!5m2!1sja!2sjp"
                            width="300" height="300" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <!-- <div>
            <v-btn
                @click="$vuetify.goTo(0)"
                v-show="isActive"
                v-scroll="onScroll"
                >
            top
            </v-btn>
        </div> -->
    </v-container>
</template>

<styles lang="scss" scoped>
.parallax-first {
    background-image: url('~/assets/images/24340053_m.jpg');
    background-size: cover;
    min-height: 70vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.parallax {
    background-size: cover;
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.parallax2 {
    background-size: cover;
    min-height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}


.top-title {
    background: #9d5b8b;
    min-height: 300px;;
}


.top-topics {
    font-size: 20px;
};

.top-lead {
    font-family: "Roboto sans-serif";
    letter-spacing: 0.5em;
    padding-top: 40px;
    font-size: 12px;
    background:linear-gradient(45deg, #b22222,#f8f8FF,#b22222);
    background-size: 200% 200%;
    color: transparent;
    margin-top: 60px;
    padding-left: 30px;
    padding-bottom: 10px;
    background-clip: text;
    animation: bggradient 10s ease infinite;
}

.top-lead:before {
    content: "sample\AInc.";
    white-space: pre;
    font-family: "Roboto sans-serif";
    letter-spacing: 0.5em;
    padding-top: 40px;
    font-size: 40px;
    background:linear-gradient(45deg, #b22222,#f8f8FF,#b22222);
    background-size: 200% 200%;
    color: transparent;
    margin-top: 60px;
    padding-bottom: 10px;
    background-clip: text;
    animation: bggradient 10s ease infinite;
}

.overlay-font {
    position: absolute;
    top: 30px;
}

.mask {
    display: block;
    line-height: 0;
    overflow: hidden;
}

.zoomIn {
    img{
        transform: scale(1);
        transition: .3s ease-in-out;
    }
}

.zoomIn:hover {
    img {
        transform: scale(1.2);
    }
}

.slideshow {
    display: flex;
    animation: loop-slide 30s infinite linear 1s both;
}

@keyframes loop-slide {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.content {
    width: 300px;
    height: 300px;
    margin: 30px;
}


.wrap {
    display: flex;
    align-items: center;
    height: 500px;
    overflow: hidden;
    position: relative;
    margin-top: 30px;
}

.fluid-lead3 {
    width:120%;
    font-size: 16px;
    z-index: 30;
}


.top-parent2 {
    z-index: 20;
}

.reversal-main-font {
    color: #FFF;
}
.reversal-main-button {
    position: relative;
    overflow: hidden;
    min-width: 100px;
    min-height: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    padding: 20px 80px 20px 30px;
    border: 3px solid #f8f8FF;
    border-radius: 5rem;
    transition: all .3s;
    background: transparent;
    color: #e5abbe;
    z-index: 1;
    transition: .3s;
}

.reversal-main-button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #f8f8FF;
    transform-origin: 50%, 0%;
    transform: scaleY(0);
    transition: transform ease .3s;
}
.reversal-main-button:hover {
    color: #9d5b8b;
}

.reversal-main-button:hover::before {
    transform-origin: 50% 100%;
    transform: scaleY(1);
}



.reversal-main2-font {
    color: #FFF;
}

.reversal-main2-button {
    position: relative;
    overflow: hidden;
    min-width: 100px;
    min-height: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    padding: 10px 20px 10px 20px;
    border: 3px solid #e5abbe;
    border-radius: 5rem;
    transition: all .3s;
    background: transparent;
    color: #e5abbe;
    z-index: 1;
    transition: .3s;
}

.reversal-main2-button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #e5abbe;
    transform-origin: 50%, 0%;
    transform: scaleY(0);
    transition: transform ease .3s;
}
.reversal-main2-button:hover {
    color: #9d5b8b;
}

.reversal-main2-button:hover::before {
    transform-origin: 50% 100%;
    transform: scaleY(1);
}



.contact-container {
    font-family: 'Zen Maru Gothic', sans-serif;
    background: #9d5b8b;
    color: #e5abbe;
}

.right-position {
    //margin-left: 430px;
    margin-bottom: 30px;
}


.main-contents-container {
    font-family: 'Zen Maru Gothic', sans-serif;
    color: #e5abbe;
    margin: 20px auto;
}

.main-introduce-box {
    color: #e5abbe;
    font-family: 'Zen Maru Gothic', sans-serif;
    z-index: 7;
    margin-top: 0px;
}

.greeting-button {
    font-weight: bold;
}

.main-button {
    position: relative;
    overflow: hidden;
    min-width: 100px;
    min-height: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    padding: 20px 80px 20px 30px;
    border: 3px solid #9d5b8b;
    border-radius: 5rem;
    transition: all .3s;
    background: #e5abbe;
    color: #9d5b8b;
    z-index: 1;
    transition: .3s;
}

.main-button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #9d5b8b;
    transform-origin: 50%, 0%;
    transform: scaleY(0);
    transition: transform ease .3s;
}

.main-button:hover {
    color: #e5abbe;
}

.main-button:hover::before {
    transform-origin: 50% 100%;
    transform: scaleY(1);
}

.main-font {
    font-family: 'Zen Maru Gothic', sans-serif;
    color: #9d5b8b;
}

.main2-button {
    position: relative;
    overflow: hidden;
    min-width: 100px;
    min-height: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    padding: 20px 80px 20px 30px;
    border: 3px solid #9d5b8b;
    border-radius: 5rem;
    transition: all .3s;
    background: transparent;
    color: #9d5b8b;
    z-index: 1;
    transition: .3s;
}

.main2-button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #9d5b8b;
    transform-origin: 50%, 0%;
    transform: scaleY(0);
    transition: transform ease .3s;
}

.main2-button:hover {
    color: #e5abbe;
}

.main2-button:hover::before {
    transform-origin: 50% 100%;
    transform: scaleY(1);
}

.fade {
    animation-name: fadeAnime;
    animation-duration: 1s;
    animation-fill-mode: forwards;
};

@keyframes fadeAnime {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};


.news-band {
   position: relative;
}
.news-band::before,
.news-band::after {
   position: absolute;
}

.news-band::before {
   content: "";
   z-index: 0;
   //width: 120%;
   height: 650px;
   margin-left: 0x;
   padding: 0;
   //margin-top: 200px;
   background:linear-gradient(45deg, #e597b2,#e8d3d1,#e597b2);
   background-size: 200% 200%;
   animation: bggradient 10s ease infinite;
}

@keyframes bggradient{
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.contents-title {
    padding: 30px 20px;
    font-size: 20px;
    margin: 0 auto;
};

.top-parent {
    position: relative;
}

.niigata-image {
    height: 600px;
    object-fit: cover;
}

.fluid-lead {
    font-family: "Roboto sans-serif";
    letter-spacing: 0.5em;
    padding-top: 40px;
    font-size: 30px;
    background:linear-gradient(45deg, #e597b2,#e8d3d1,#e597b2);
    background-size: 200% 200%;
    color: transparent;
    margin-top: 60px;
    padding-left: 30px;
    padding-bottom: 10px;
    background-clip: text;
    animation: bggradient 10s ease infinite;
}

.fluid-colorful {
    background: #9d5b8b;
}

.strong-contents {
    background: #9d5b8b;
    opacity: 1;
    z-index: 10px;
}


.fluid-base {
    background: linear-gradient(45deg, #e597b2,#e8d3d1,#e597b2);
}

.company-message-container {
    top: 0px;
    position: relative;
    display: flex;
    justify-content: center;
}


.company-message {
    letter-spacing: 0.3em;
    padding: 25px 10px 25px 10px;
    margin: 0 20px 0 20px;
    font-size: 16px;
    background-color: #9d5b8b;
    opacity: 0.8;
    color: #e5abbe;
    position: absolute;
    bottom: 10px;
    z-index: 5;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
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
};

@keyframes PageAnime2{
	0% {
		transform-origin:bottom;
		transform:scaleY(1);
	}
	100% {
		transform-origin:bottom;
		transform:scaleY(0);
	}
}

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
    100% {
        opacity: 1;
        transform: translate(0);
    }
};

.fadeRightTrigger {
    opacity: 0;
};

.fadeRight {
    animation-name: fadeLeftAnime;
    animation-duration: 1s;
    animation-fill-mode: forwards;
};

@keyframes fadeRightAnime {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
};

.heading {
    font-family: "Alex Brush", cursive;
    font-size: 3.5rem;
    font-weight: normal;
    color: #e597b2;
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
    color: white;
    letter-spacing: 0.2em;
    line-height: 1.6;
    writing-mode: vertical-rl;
    white-space: nowrap;
    z-index: 3;
}

.news {
    font-family: "Note Serif JP";
    position: absolute;
    left: 0;
    bottom: 0;
    background: #FFF;
    z-index: 5;
    padding: 40px;
};

.fadeRightTrigger {
    opacity: 0;
}

.fadeRight {
    animation-name: fadeRightAnime;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    opacity: 0;
}

@keyframes fadeRightAnime {
    0% {
        opacity: 0;
        transform: translateX(80px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);

    }
}
</styles>
