<template>
    <div>
        {{id}}
        {{name}}
    </div>
</template>

<script>
    export default {
        name: "ObjectBase",
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