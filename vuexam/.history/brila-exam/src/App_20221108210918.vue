<template>
  <div>
    <ObjectTable :listData="list"/>
  </div>
</template>

<script>
  import { mapGetter } from 'vuex';
  import ObjectTable from "./components/ObjectTable";
  export default {
    name: "App",
    components: {
      ObjectTable,
    },
    computed: {
      ...mapGetter(['list']),
    },
    
  }
</script>

<style lang="scss" scoped>

</style>