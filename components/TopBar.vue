<template>
  <div style="border-color: white">
    <div class="d-flex align-items-center justify-content-left">
      <b-img src="../assets/images/test.png" alt="Italian Trulli" style="width:35px; height:25px;" class="m-3"></b-img>
      <h4 style="color: black; margin-top: 10px"> The pet registration system </h4>
    </div>

<!--    <div class="topbar-container">-->
<!--      <div>-->
<!--        <span class="topbar-item"> About </span>-->
<!--      </div>-->
<!--      <div>-->
<!--        <span class="topbar-item"> Profile </span>-->
<!--      </div>-->
<!--      <div>-->
<!--        <span class="topbar-item"> Logout </span>-->
<!--      </div>-->
<!--    </div>-->
  </div>

</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TopBar",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.topbar-container {
  display: flex;
  gap: 10ch;
}

.topbar-item {
  font-size: 1rem;
  color: white;
  font-weight: 400;
}
</style>
