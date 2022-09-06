<template>
  <div id="app">
    <top-bar :is-logged-in="isLoggedIn" class="topbar" />
    <b-sidebar v-if="isLoggedIn" id="sidebar-1" title="Pet actions" shadow backdrop width="350px">
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
<script>
import Vue from 'vue'
import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default Vue.extend({
  name: 'MainLayout',
  components: {
    TopBar,
    SideBar,
    FooterComponent,
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  mounted() {
    this.fetchUserDetails()
  },
  methods: {
    fetchUserDetails() {
      this.$axios.get('/me')
        .then((res) => {
        console.log(res)
      })
        .catch(() => this.$router.push("login"))
    },
  },
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

* {
  font-family: Open Sans, sans-serif;
  //color: white;
}

.my-footer {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.topbar {
  background-color: #f5eae6;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  color: #fff;
  padding: 10px;
}
</style>
