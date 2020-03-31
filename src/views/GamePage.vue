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
        <div class="footer">
            <img src="../assets/slice_img/icons/icons_stop.svg" alt="stop">
            <img src="../assets/slice_img/icons/icons_pause.svg" alt="pause">
            <div class="three-card">
                <img src="../assets/slice_img/ui/img_threecards.svg" height="70" alt="pause">
                <div class="button">UNDO</div>
            </div>
            <img src="../assets/slice_img/icons/icons_undo.svg" alt="undo">
            <img src="../assets/slice_img/icons/icons_tips.svg" alt="tips">
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "GamePage",
        props: {
            counter: Number
        },
        mounted() {

            this.timer = setInterval(() => this.time++, 1000);
        },
        beforeDestroy() {

            clearInterval(this.timer);
        },
        methods: {
            changePage() {
                this.$emit('changePage', 'main');
            }
        },
        data() {

            return {
                time: 0,
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

    .nav-top {
        background-image: linear-gradient(135deg, rgb(93, 127, 217) 0%, rgb(137, 87, 237) 100%);
        position: absolute;
        top: 0;
        width: calc(100vw - 80px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px 10px 40px;
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

    .middle {
        position: absolute;
        top: 70%;
    }

    .text {
        padding-left: 7px;
        margin-top: 10px;
        font-size: 24px;
        color: rgb(158, 153, 255);
    }
</style>
