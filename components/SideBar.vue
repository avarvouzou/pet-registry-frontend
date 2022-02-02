<template>
  <div>
    <b-nav vertical style="text-align: left; font-size: x-large; margin-top: 40px">
      <b-nav-item @click.prevent="showPetChild = !showPetChild" style="padding-left: 20px;">
        <span style="color: #6c757d">My pets</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16" style="width: 30px; height: 30px; color: black">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
        </svg>
      </b-nav-item>
      <b-nav-item v-if="showPetChild" class="nested-item" to="/pets">
        <span style="color: #6c757d">Pending pet registrations</span>
      </b-nav-item>
      <b-nav-item v-if="showPetChild" class="nested-item" to="/pets" >
        <span style=" color: #6c757d">Registered pets</span>
      </b-nav-item>
      <b-nav-item class="sidebar-item">
        <span style="color: #6c757d">Registrations </span>
      </b-nav-item>
      <b-nav-item class="sidebar-item">
        <span style="color: #6c757d">Municipality Pets</span>
      </b-nav-item>
      <b-nav-item class="sidebar-item" to="/pets/create">
        <span style="color: #6c757d">Create a new Pet</span>
      </b-nav-item>
      <img src="../assets/images/dogocato.png" alt="Italian Trulli" class="sidebar-footer-img">

    </b-nav>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SideBar",
  data() {
    return {
      username: "",
      password: "",
      showPetChild: false,
    };
  },
  methods: {
    onSubmit(): void {
      console.log("banana");
    },
  },
});
</script>
<style scoped>
.sidebar-item {
  margin-top: 30px;
  padding-left: 20px;
}

.nav-item:hover {
  background-color: #f5eae6;
}

.nested-item {
  padding-left: 2rem;
  margin-top: 10px;
  font-size: 1.2rem;
  line-height: 1.2;
}

.sidebar-footer-img {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
