<template>
    <div class="main">
        <div class="nav-top">
            <div class="logo">接龍遊戲</div>
            <div class="timer">
                <div class="title">TIME:</div>
                <div class="value">{{timeStr}}</div>
                <div class="title">MOVE:</div>
                <div class="value">00</div>
            </div>
        </div>
        <div class="container">
            <div style="display: flex;">
                <card-slot :key='n' v-for="n in 4" :darker="true" style="margin-right: 10px"/>
                <card-slot :key='n + 4' v-for="n in 4" style="margin-right: 10px">
                    <img class="card-slot" :src="cardTypes[n-1]" alt="card">
                </card-slot>
            </div>

            <div style=" position: relative;">
                <div class="card-div" :key='m' v-for="m in 8" :style="{paddingTop : m * 40 + 'px'}">
                    <template v-for="n in 8">
                        <play-card v-if="1" :key='n' :name="['S1','C1','H1','D1',][n%4]" style="margin-right: 10px"/>
                        <div v-else :key='n' style="width:110px"/>
                    </template>
                </div>
            </div>
        </div>
        <div class="footer">
            <img class="image" src="../assets/slice_img/icons/icons_stop.svg" alt="stop">
            <img class="image" src="../assets/slice_img/icons/icons_pause.svg" alt="pause">
            <div class="three-card">
                <img src="../assets/slice_img/ui/img_threecards.svg" height="70" alt="pause">
                <div class="button">UNDO</div>
            </div>
            <img class="image" src="../assets/slice_img/icons/icons_undo.svg" alt="undo">
            <img class="image" src="../assets/slice_img/icons/icons_tips.svg" alt="tips">
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import CardSlot from '../components/CardSlot.vue';
    import PlayCard from '../components/PlayCard.vue';
    import ct1 from '../assets/slice_img/cards/cardtype_1s.svg';
    import ct2 from '../assets/slice_img/cards/cardtype_2s.svg';
    import ct3 from '../assets/slice_img/cards/cardtype_3s.svg';
    import ct4 from '../assets/slice_img/cards/cardtype_4s.svg';

    const getCardList = () => {

        // 黑桃 (Spade) . 紅心 (Heart) . 黑梅 (Club). 方塊 (Diamond)

        // S1 => 黑桃 1
        // H3 => 紅心 3
        // CJ => 黑梅 J
        // DK => 方塊 K

        const SpadeArr = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK',];

        const HeartArr = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK',];

        const ClubArr = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK',];

        const DiamondArr = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK',];

        const arr = [...SpadeArr, ...HeartArr, ...ClubArr, ...DiamondArr];

        return arr;
    };

    export default {
        name: "GamePage",
        props: {
            counter: Number
        },
        components: {
            CardSlot,
            PlayCard,
        },
        mounted() {

            this.timer = setInterval(() => this.time++, 1000);
        },
        beforeDestroy() {

            clearInterval(this.timer);
        },
        methods: {
            changePage() {
                this.$emit('change-page', 'main');
            }
        },
        data() {

            // 黑桃 (Spade) . 紅心 (Heart) . 黑梅 (Club). 方塊 (Diamond)

            // S1 => 黑桃 1
            // H3 => 紅心 3
            // CJ => 黑梅 J
            // DK => 方塊 K


            return {
                time: 0,
                cardTypes: [ct3, ct4, ct2, ct1,],
                cardList: getCardList()
            }
        },
        computed: {
            timeStr() {

                return moment.utc(this.time * 1000).format('mm:ss');
            }
        }
    }
</script>

<style scoped>

    .card-div {
        display: flex;
        position: absolute;
        transform: translateX(-50%);
    }

    .card-slot {
        /* color picker : https://codepen.io/sosuke/pen/Pjoqqp */
        filter: contrast(0) brightness(200%) grayscale(100%) opacity(50%);
        width: 60px;
    }

    .container {
        padding: 85px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nav-top {
        background-image: linear-gradient(135deg, rgb(93, 127, 217) 0%, rgb(145, 33, 195) 100%);
        position: absolute;
        top: 0;
        width: calc(100vw - 80px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px 10px 40px;
        height: 55px;
    }

    .logo {
        color: white;
        font-size: 30px;
    }

    .timer {
        display: flex;
        align-items: baseline;
    }

    .title {
        color: white;
        font-size: 10px;
        margin-right: 5px;
    }

    .value {
        color: white;
        font-size: 35px;
        margin-right: 20px;
    }

    .footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-image: linear-gradient(135deg, rgb(93, 127, 217) 0%, rgb(137, 87, 237) 100%);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 600px;
        height: 80px;
        border-radius: 40px 40px 0 0;
    }

    .three-card {
        transform: translateY(-30px);
        height: 70px;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 700;
        color: white;
        width: 100px;
        height: 30px;
        background-color: #f36b4b;
        border-radius: 30%/100%;
        cursor: pointer;
        transform: translate(5px, -23px);
    }

    .button:hover {
        background-color: #ff6666;
    }


    .image {
        transition: transform 200ms;
    }

    .image:hover {
        transform: translateY(-5px);
    }
</style>
