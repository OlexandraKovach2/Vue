<template>
  <div>
    <ObjectTable :listData="list"/>
    <input type="test" v-model="ok"/>
    <button @click="changeName(ok)">ok</button>
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