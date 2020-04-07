<template>
    <div :class="{'slot':!darker,'slot-darker':darker} ">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CardSlot",
        props: {
            darker: Boolean
        }
    }
</script>

<style scoped>
    .slot-darker {
        background-color: #434173;
        border-radius: 10px;
        width: 100px;
        height: 100px;
    }

    .slot {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #6562A9;
        border-radius: 10px;
        width: 100px;
        height: 100px;
    }
</style>
