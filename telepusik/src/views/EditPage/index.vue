<template>
<div class="main">
    <div class="add">
        <input type="text" v-model="name" /><br>
        <input type="text" v-model="imgSrc" /> <br>
        <input type="number" v-model="price" /> <br>
        <button v-on:click="addToCardList([name,imgSrc,price])">Send</button>
    </div>
</div>
</template>

<script>
    import {mapActions} from "vuex"

    export default {
    name:"EditPage",
    methods: {
      ...mapActions(['addToCardList']),
    },
    data() {
        return {
            name: '',
            imgSrc: '',
            price: '',
        }
    },
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0px;
    padding: 0px;
}
.main{
    display: flex;
    justify-content: center;
}
</style>