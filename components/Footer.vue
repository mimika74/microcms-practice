<script setup lang="ts">
import { lists, lists2 } from "~/datas/data"
const toCompany = () => {
    navigateTo("/company")
};

const toGreeting = () => {
    navigateTo("/greeting")
};

const toServices = () => {
    navigateTo("/services")
}

const toBlog = () => {
    navigateTo("/blog")
}

const toRecruite = () => {
    navigateTo("/recruite")
}


const toContact = () => {
    navigateTo("/contact")
}


const toPrivacy = () => {
    navigateTo("/privacy")
}


</script>

<template>
    <v-footer class="footer-background">
        <v-row class="flex-1-0 row3" justify="center" style="margin: 0;">
            <div class="d-none d-sm-block">
                <div class="parent">
                    <div class="children">
                        <img src="~~/assets/images/logo.png" style="width:100px; height:auto;"/>
                    </div>
                    <div class="children">
                        <h3 class="footer-font" variant="plain" @click="toCompany">会社案内</h3>
                        <div><v-btn @click="toGreeting" variant="plain" class="footer-link"><h4 class="footer-font-child">ご挨拶</h4></v-btn></div>
                        <div><v-btn @click="toPrivacy" variant="plain" class="footer-link"><h4 class="footer-font-child">プライバシーポリシー</h4></v-btn></div>
                    </div>
                    <div class="children">
                        <h3 class="footer-font" variant="plain">サービス</h3>
                        <div><v-btn @click="toServices" variant="plain" class="footer-link"><h4 class="footer-font-child">製品について</h4></v-btn></div>
                        <div><v-btn @click="toServices" variant="plain" class="footer-link"><h4 class="footer-font-child">品質について</h4></v-btn></div>
                        <div><h4 class="footer-font"></h4></div>
                        <h3 class="footer-font" variant="plain">Dx情報</h3>
                        <div><v-btn @click="toBlog" variant="plain" class="footer-link"><h4 class="footer-font-child">コラム</h4></v-btn></div>
                    </div>
                    <div  class="children">
                        <div><h3 class="footer-font" variant="plain">採用</h3></div>
                        <div><v-btn @click="toRecruite" variant="plain" class="footer-link"><h4 class="footer-font-child">採用について</h4></v-btn></div>
                        <h4 class="footer-font"></h4>
                        <div><button @click="toContact" variant="plain" class="footer-link"><h3 class="footer-font footer-link">お問い合わせ</h3></button></div>
                    </div>
                </div>
                <v-col class="text-center ma-0" cols="12"  style="margin: 0; background-color: #e5abbe;">
                    <div class="copy">
                        <div class="copy-writer footer-font">
                            <strong>©sampleInc.,LTD.ALL RIGHTS RESERVED {{ new Date().getFullYear() }}</strong>
                        </div>
                    </div>
                </v-col>
            </div>
            <div class="d-block d-sm-none">
                <v-col style="display: flex; justify-content: center;">
                    <img src="~~/assets/images/logo.png" style="width:100px; height:auto; margin-top: 50px;"/>
                </v-col>
                <v-col class="text-center ma-0" cols="12">
                    <div class="copy">
                        <div class="footer-font">
                            <strong>©sampleInc.,LTD.<br>ALL RIGHTS RESERVED {{ new Date().getFullYear() }}</strong>
                        </div>
                    </div>
                </v-col>
            </div>
        </v-row>
    </v-footer>
</template>

<style lang="scss" scoped>
.footer-link {
    padding-bottom: 10px;
}

.footer-link:hover {
    top: -3px;
    transition: top 1s ease 0s;
    cursor: pointer;
}

.parent {
    top: 15px;
    display: inline-flex;
    background: #e5abbe;
}

.children {
    margin: 50px 80px 50px 80px;
    justify-content: space-around;
}

@media screen and (min-width: 800px) and (max-width: 1130px) {
    .children {
    margin: 40px 40px 25px 40px;
    justify-content: space-around;
    }
}

@media screen and (min-width: 580px) and (max-width: 800px) {
    .children {
    margin: 48px 24px 24px 24px;
    justify-content: space-around;
    }
}
.copy {
    display: inline-block;
    margin: auto;
}

.footer-background {
    background: #e5abbe;
    padding: 0;
}


.footer-font {
    font-family: 'Zen Maru Gothic', sans-serif;
    padding-top: 5px;
}

.footer-font-child {
    font-family: 'Zen Maru Gothic', sans-serif;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
}

.footer-font-child::before {
    content: "-";
}

</style>