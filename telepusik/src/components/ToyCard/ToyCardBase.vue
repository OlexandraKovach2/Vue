<template>
<div class="base">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
    <div class="Toy">
        <div class="name">
            {{name}}
        </div>
        <div class="img">
            <img :src="imgSrc"/>
        </div>
        <div class="buy">
            <div>{{price}}$</div>
            <button class="material-icons-sharp" @click="favoriteButton(id)" >{{getBorderForFavorite()}}</button>
            
        </div>
    </div>
    </div>
</template>

<script>
   import {mapActions} from "vuex"

    export default {
        name: "ToyCardBase",
        methods: {
            ...mapActions(['favoriteButton']),
            getBorderForFavorite() {
                if(this.favorite){
                    return "favorite";
                }
                else{
                    return "favorite_border";
                }
            },
        },
        props: {
            id:{
                type:Number,
                default: 0
            },
            name: {
                type: String,
                default: "Toy"
            },
            imgSrc: {
                type: String,
                default: "https://chudo-ostriv.com.ua/media/catalog/product/cache/e026f651b05122a6916299262b60c47d/b/o/boc223739_1.webp"
            },
            price: {
                type: Number,
                default: 10
            },
            favorite: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap');
*{
font-family: 'Lily Script One', cursive;
}
.base{
    background-color: #F2A2BD;
    width: 200px;
    height: 300px;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    filter: drop-shadow(0px 0px 15px rgba(242, 162, 189, 0.7));
}
.Toy{
    color: #A84768;
    margin: 20px 65px;
}
.name{
    font-size: 25px;
    text-align: center;
}
.img{
    overflow: hidden;
    width: 150px;
    height: 200px;
    border-radius: 20px;
    img{
    width: 150px;
    height: 200px;
    object-fit: cover;
    }
}
.buy{
    font-size: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    button{
        border: 0px;
        background-color: transparent;
        color: #A84768;
    }
}
</style>