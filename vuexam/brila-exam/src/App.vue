<template>
  <div>
    <ObjectTable :listData="list"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ObjectTable from "./components/ObjectTable";
  export default {
    name: "App",
    components: {
      ObjectTable,
    },
    computed: {
      ...mapGetters(['list']),
    },
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
}
</style>