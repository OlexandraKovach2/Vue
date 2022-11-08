<template>
    <div>
        <div class="info-row">
            <div>Product name:</div>
            <div>{{name}};</div>
        </div>
        <div class="info-row">
            <div>Unit:</div>
            <div>{{unit}};</div>
        </div>
        <div class="info-row">
            <div>Able number:</div>
            <div>{{count}} {{unit}}s;</div>
        </div>
        <div class="info-row">
            <div>Price:</div>
            <div>{{cost}};</div>
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
            unit: {
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