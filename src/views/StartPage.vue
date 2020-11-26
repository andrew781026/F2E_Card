<template>
    <div class="root">
        <img src="../assets/startpage_bg.jpg" class="bg" alt="start_game"/>
        <div class="middle" >
            <div class="button" @click="changePage">START</div>
            <p class="text">How To Play ?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StartPage",
        methods: {
            changePage() {
                this.$emit('change-page', 'main');
            }
        }
    }
</script>

<style scoped>

    .root {
        position: absolute;
        min-height: 100vh;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        background-color: #2c2b50;
        z-index: 3;
    }

    .bg {
        width: 80vw;
        height: 100%;

        transform: translateY(0);
        transform-origin: top;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: 700;
        color: white;
        width: 180px;
        height: 70px;
        background-color: #ff3333;
        border-radius: 40%/100%;
        cursor: pointer;
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
