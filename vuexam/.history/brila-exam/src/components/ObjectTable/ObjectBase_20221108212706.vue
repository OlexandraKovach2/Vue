<template>
    <div>
        {{id}}
        {{name}}
        {{list}}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "ObjectBase",
        computed: {
        ...mapGetters(['list']),
        },
        props: {
            id: {
                type: Number,
                default: 0
            },
            name: {
                type: String,
                default: "None name"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>