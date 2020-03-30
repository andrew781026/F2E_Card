<template>
    <div class="main">
        <div class="nav-top">
            <div class="logo">接龍遊戲</div>
            <div class="timer">
                <div class="title">TIME:</div>
                <div class="value">10:21</div>
                <div class="title">MOVE:</div>
                <div class="value">00</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GamePage",
        props: {
            counter: Number
        },
        methods: {
            changePage() {
                this.$emit('changePage', 'main');
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
