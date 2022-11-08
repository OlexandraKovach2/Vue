<template>
    <div class="objectTable">
        <div class="object">
        <ObjectBase v-for="item in listData"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :unit="item.unit"
        :count="item.count"
        :cost="item.cost"
        />
        </div>
    </div>
</template>

<script>
    import ObjectBase from "./ObjectBase.vue"
    export default {
        name: "ObjectTable",
        components: {
            ObjectBase,
        },
        props: {
            listData: {
                type: Array,
                default: () => []
            },
        },
    }
</script>

<style lang="scss" scoped>
.object{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    :hover{
        scale: 1.1;
    }
}
.objectTable{
    display: flex;
    justify-content: center;
}
</style>