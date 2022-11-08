<template>
  <div>
    gfdgfd
    {{list}}
    <!-- <ObjectTable :listData="list"/> -->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  // import ObjectTable from "./components/ObjectTable";
  export default {
    name: "App",
    // components: {
    //   ObjectTable,
    // },
    methods: {
      ...mapGetters(['list']),
    },
    
  }
</script>

<style lang="scss" scoped>

</style>