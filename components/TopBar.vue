<template>
  <div style="border-color: white; box-shadow: 0 0.125rem 0.625rem rgb(0 0 0 / 20%);">
    <div class="d-flex align-items-center justify-content-between" style="color: black; margin-top: 10px">
      <div class="d-flex align-items-center justify-content-start">
        <b-button v-if="isLoggedIn" v-b-toggle.sidebar-1 style="border: none; background-color: transparent">
          <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width:45px; height:35px; color: black;">
            <defs>
              <path
                id="a"
                d="M2.5 4.5h19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-19A.5.5 0 0 1 2 7V5a.5.5 0 0 1 .5-.5zm0 6h19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-19A.5.5 0 0 1 2 13v-2a.5.5 0 0 1 .5-.5zm0 6h19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-19A.5.5 0 0 1 2 19v-2a.5.5 0 0 1 .5-.5z"
              />
            </defs>
            <use fill="currentColor" xlink:href="#a" transform="translate(-2 -4)" fill-rule="evenodd" />
          </svg>
        </b-button>
        <b-img src="../assets/images/test.png" alt="Italian Trulli" style="width:35px; height:25px;" class="m-3"></b-img>
        <h4> The pet registration system </h4>
      </div>
      <h5 v-if="isLoggedIn">User {{username}}</h5>
      <b-button v-if="isLoggedIn" @click="logout">Logout</b-button>
    </div>

  </div>

</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TopBar",
  props: ['isLoggedIn', "username"],
  methods: {
    logout() {
      this.$axios.CancelToken(() => {})
      this.$store.commit('user/SET_USER_DETAILS', {
        name: "",
        role: "",
        authorities: []
      })
      this.$store.commit('user/CHANGE_TOKEN', "")
      this.$router.push("login")
    },
  },
});
</script>
