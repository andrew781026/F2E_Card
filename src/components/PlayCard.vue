<template>
    <div class="card">
        <span class="text">A</span>
        <img class="small" :src="smallSrc" alt="big image">
        <img class="big" :src="bigSrc" alt="small icon">
    </div>
</template>

<script>
    import small_Spade from '../assets/slice_img/cards/cardtype_1s.svg';
    import small_Club from '../assets/slice_img/cards/cardtype_2s.svg';
    import small_Heart from '../assets/slice_img/cards/cardtype_3s.svg';
    import small_Diamond from '../assets/slice_img/cards/cardtype_4s.svg';
    import big_Spade from '../assets/slice_img/cards/cardtype_1.svg';
    import big_Club from '../assets/slice_img/cards/cardtype_2.svg';
    import big_Heart from '../assets/slice_img/cards/cardtype_3.svg';
    import big_Diamond from '../assets/slice_img/cards/cardtype_4.svg';
    import black_j from '../assets/slice_img/cards/black_j.svg';
    import black_q from '../assets/slice_img/cards/black_q.svg';
    import black_k from '../assets/slice_img/cards/black_k.svg';
    import red_j from '../assets/slice_img/cards/red_j.svg';
    import red_q from '../assets/slice_img/cards/red_q.svg';
    import red_k from '../assets/slice_img/cards/red_k.svg';

    const getSmallSrc = (name) => {

        if (!name) return '';
        else if (name.startsWith('S')) return small_Spade;
        else if (name.startsWith('C')) return small_Club;
        else if (name.startsWith('H')) return small_Heart;
        else if (name.startsWith('D')) return small_Diamond;
        else return '';
    };

    const getBigSrc = (name) => {

        if (!name) return null;
        else if (name.endsWith('J')) {

            if (name.startsWith('S') || name.startsWith('C')) return black_j;
            else return red_j;

        } else if (name.endsWith('Q')) {

            if (name.startsWith('S') || name.startsWith('C')) return black_q;
            else return red_q;

        } else if (name.endsWith('K')) {

            if (name.startsWith('S') || name.startsWith('C')) return black_k;
            else return red_k;

        } else {

            if (name.startsWith('S')) return big_Spade;
            else if (name.startsWith('C')) return big_Club;
            else if (name.startsWith('H')) return big_Heart;
            else if (name.startsWith('D')) return big_Diamond;
        }
    };

    export default {
        name: "PlayCard",
        props: {
            name: String
        },
        data() {

            return {
                smallSrc: getSmallSrc(this.name),
                bigSrc: getBigSrc(this.name),
            }
        }
    }
</script>

<style scoped>
    .text {
        font-weight: 700;
        font-size: 20px;
        position: absolute;
        top: 5px;
        left: 10px;
    }

    .small {
        position: absolute;
        top: 5px;
        right: 10px;
    }

    .big {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        height: 60px;
    }

    .card {
        position: relative;
        background-image: url("../assets/slice_img/cards/card_bg.svg");
        border-radius: 10px;
        width: 100px;
        height: 110px;
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
    }
</style>
