<template>
    <div>
        <ObjectBase v-for="item in listData"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :unit="item.unit"
        :count="item.count"
        :cost="item.cost"
        />
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

</style>