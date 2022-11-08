<template>
  <div>
    <ToyCard :ToyCardList="List"/>
  </div>
</template>

<script>
import ToyCard from "../../components/ToyCard";
import store from "../../storage"
  export default {
    name: "ShopPage",
    components: {
      ToyCard,
    },
    computed: {
      List(){
        return store.state.cardList
      }
    },
  }
  
</script>

<style lang="scss" scoped>
*{
    margin: 0px;
    padding: 0px;
}
</style>