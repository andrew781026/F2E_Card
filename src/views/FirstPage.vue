<template>
    <div class="main">
        <transition name="slide-fade">
            <start-page v-if="page === 'first'" :page="page" @changePage="changePage"/>
        </transition>
        <transition name="slide-fade">
            <game-page v-if="page === 'main'" :page="page" @changePage="changePage"/>
        </transition>
    </div>
</template>

<script>
    import StartPage from "./StartPage";
    import GamePage from "./GamePage";

    export default {
        name: "FirstPage",
        components: {
            StartPage,
            GamePage,
        },
        methods: {
            changePage(page) {
                this.page = page;
            }
        },
        data() {

            return {
                page: 'main'
            }
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        background-color: #2c2b50;
    }

    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter{
        transform: scaleY(0);
    }

    .slide-fade-leave-to {
        transform: translateY(-100%);
    }

</style>
