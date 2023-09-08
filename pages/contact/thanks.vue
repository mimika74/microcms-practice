<script setup lang="ts">
</script>

<template>
    <v-container>
        <div class="thanks-message-container">
            <div class="thanks-message-title">
                <h1><span>お問い合わせが<br>完了しました<v-icon style="padding-bottom: 5px; padding-left: 10px;">mdi-check-circle</v-icon></span></h1>
            </div>
            <div class="thanks-messeage">
                <div class="thanks-messeage-box">
                    <span>Sample Incへの<br>お問い合わせありがとうございました。</span><br>
                    <span>3営業日以内に、担当者より<br>ご連絡いたしますので</span><br>
                    <span>今しばらくお待ちくださいませ。</span>
                </div>
            </div>
            <div class="toHome">
                <button href="/" class="home-button home-font">
                    <span>戻る</span><v-icon style="padding-bottom: 5px; padding-left: 50px;">mdi-arrow-right-thin</v-icon>
                </button>
            </div>
        </div>
    </v-container>
</template>

<styles lang="scss" scoped>
.thanks-message-title {
    margin-top: 200px;
    display: flex;
    text-align: center;
}

.home-button {
    position: relative;
    overflow: hidden;
    min-width: 100px;
    min-height: 30px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
    padding: 20px 40px 20px 30px;
    border: 3px solid #333631;
    border-radius: 5rem;
    transition: all .3s;
    background: transparent;
    color: #333631;
    z-index: 1;
    transition: .3s;
    //margin-left: 830px;
    margin-bottom: 50px;
}

.home-button::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #333631;
    transform-origin: 50%, 0%;
    transform: scaleY(0);
    transition: transform ease .3s;
}

.home-button:hover {
    color: #f8f8FF;
}

.home-button:hover::before {
    transform-origin: 50% 100%;
    transform: scaleY(1);
}

.home-font {
    font-family: 'Zen Maru Gothic', sans-serif;
    color: #333631;
    font-weight: bold;
}

.toHome {
    font-family: 'Zen Maru Gothic', sans-serif;
    display: flex;
    justify-content: center;
    color: #333631;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 5;
}



.thanks-messeage {
    font-family: 'Zen Maru Gothic', sans-serif;
    color: #333631;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    font-weight: bold;
    line-height: 50px;
    font-size: 18px;
    text-align: center;
}

.thanks-messeage-box {
    display: block;
}
</styles>