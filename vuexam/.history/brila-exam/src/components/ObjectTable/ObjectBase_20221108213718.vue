<template>
    <div>
        <div class="info-row">
            <div>Product name:</div>
            <div>{{name}}</div>
        </div>
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
            },
            spaceVariable: {
                type: String,
                default: "kilo"
            },
            count: {
                type: Number,
                default: 1
            },
            cost: {
                type: Number,
                default: 10
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>