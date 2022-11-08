<template>
  <div>
    <ObjectTable :listData="list"/>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
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

</style>