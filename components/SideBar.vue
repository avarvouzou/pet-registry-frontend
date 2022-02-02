<template>
  <div>
    <b-nav vertical style="text-align: left; font-size: large; ">
      <b-nav-item to="/pets">
        <span style="color: #6c757d">My pets </span>
      </b-nav-item>
      <b-nav-item>
        <span style="color: #6c757d">Registrations </span>
      </b-nav-item>
      <b-nav-item>
        <span style="color: #6c757d">Municipality Pets</span>
      </b-nav-item>
      <b-nav-item exact-active-class="is-active" exact to="/pets/create">
        <span style="color: #6c757d">Create a new Pet</span>
      </b-nav-item>
      <b-img
        src="https://picsum.photos/500/500/?image=54"
        fluid
        thumbnail
      ></b-img>

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
    };
  },
  methods: {
    onSubmit(): void {
      console.log("banana");
    },
  },
});
</script>
