<template>
    <div class="ToyList">
        <ToyCardBase v-for="item in ToyCardList"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :imgSrc="item.imgSrc"
        :price="item.price"
        :favorite="item.favorite"
        class="Toy"
        />
    </div>

</template>

<script>
import ToyCardBase from "./ToyCardBase.vue";
    export default {
        name: "ToyCard",

        components: {
            ToyCardBase,
        },
        props: {
            ToyCardList: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
.ToyList{
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    margin-left: 10%;
    justify-content: center;
    .Toy{
        
    }
}
</style>