<template>
  <div id="app">
    <top-bar class="topbar" />
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Pet actions" shadow backdrop width="270px">
      <side-bar />
    </b-sidebar>
    <main class="my-main">
      <div class="o-main__content">
        <nuxt />
      </div>
    </main>
    <footer-component class="my-footer"></footer-component>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default Vue.extend({
  name: "MainLayout",
  components: {
    TopBar,
    SideBar,
    FooterComponent
  },
});
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;
  position: relative;
  min-height: 100vh;
}

* {
  font-family: Open Sans, sans-serif;
  //color: white;
}

.my-main {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.my-footer {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.topbar {
  background-image: url("../assets/images/back.jpg");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  color: #fff;
  padding: 10px;
}


</style>
