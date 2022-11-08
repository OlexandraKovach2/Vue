<template>
    <div>

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