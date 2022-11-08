<template>
    <div class="ObjectCard">
        <div class="info-row name">
            <div>Product name: </div>
            <div>{{name}}</div>
        </div>
        <div class="info-row">
            <div>Unit: </div>
            <div>{{unit}}</div>
        </div>
        <div class="info-row">
            <div>Able number: </div>
            <div>{{count}} {{unit}}s</div>
        </div>
        <div class="info-row">
            <div>Price: </div>
            <div>{{cost}}</div>
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
.ObjectCard{
    background-color: white;
    width: 400px;
    border-radius: 10px;
    border: 2px solid rgb(243, 252, 255);
    box-shadow:
  6.6px 6.7px 13.7px rgba(0, 0, 0, 0.04),
  12.9px 13.2px 25.3px rgba(0, 0, 0, 0.053),
  19.2px 19.6px 34.3px rgba(0, 0, 0, 0.057),
  25.9px 26.5px 40.9px rgba(0, 0, 0, 0.057),
  35.7px 36.6px 47.2px rgba(0, 0, 0, 0.057),
  82px 84px 80px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
.info-row{
    display: flex;
    gap: 5px;
}
.name{
    font-size: 20px;
    font-weight: 600;
}
</style>