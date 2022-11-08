<template>
<div>
  <header><div>Telepusik</div></header>
  <!-- <router-link :class="EditClass" to="/edit"><button class="editBtn" v-on="hideEdit()"> edit </button></router-link> -->
  <router-link :class="EditClass" to="/edit">
  <button class="editBtn, btn" :onclick="hideEdit"> Add </button>
  </router-link>
  <router-link :class="HomeClass" to="/"><button class="homeBtn, btn" :onclick="hideHome"> Home </button></router-link>
</div>
   <router-view> </router-view>
</template>
<script>
export default {
 data() {
  return {
    EditClass: "edit",
    HomeClass: "hidden"
  }
 },
 methods: {
  hideEdit() {
    this.EditClass = "hidden"
    this.HomeClass = "home"
  },
  hideHome() {
    this.HomeClass = "hidden"
    this.EditClass = "edit"
  }
 },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap');
*{
  font-family: 'Lily Script One', cursive;
  position: relative;
  left: -1.7%;
  top: -6px;
}
header{
  margin-bottom: 30px;
  padding: 30px;
  width: 100%;
  background-image: url("https://media.istockphoto.com/id/1173884725/vector/unicorn-pattern.jpg?s=612x612&w=0&k=20&c=VLMxZsxPvA_1jEEGeSiTzBFyfeHS-HtaO21H9qzKin8=");
  font-size: 30px;
  display: flex;
  justify-content: center;
  color: white;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
}
.hidden{
  visibility: hidden;
}
.btn{
  width: 10%;
  border: 0px;
  background-color: rgba(187, 69, 109, 0.7);
  padding: 15px;
  color: #7D2946;
  font-size: 25px;
  position: fixed;
  border-radius: 20px;
  margin: auto;
  filter: drop-shadow(0px 0px 15px rgba(187, 69, 109, 0.7));
  transition: 0.2s;
  margin-left: calc(45% - 15px / 2);
  margin-top: 550px;
  z-index: 5;
}
</style>