<template>
  <div>
    <b-nav vertical style="text-align: left; font-size: x-large; margin-top: 20px">
      <b-nav-item v-if="canReviewPet" class="sidebar-item">
        <router-link :to="{ path: '/pets', query: { status: 'PENDING' } }" >
          <span style="color: #6c757d">Registrations</span>
        </router-link>
      </b-nav-item>
      <b-nav-item v-if="canCreatePet" class="sidebar-item">
        <router-link :to="{ path: '/pets', query: { own: 'true' } }" >
          <span style="color: #6c757d">My pets</span>
        </router-link>
      </b-nav-item>
      <b-nav-item v-if="canViewMunicipalityPets" class="sidebar-item" >
        <span style="color: #6c757d">Municipality Pets</span>
      </b-nav-item>
      <b-nav-item v-if="canCreatePet" class="sidebar-item" to="/pets/create">
        <span style="color: #6c757d">Create a new Pet</span>
      </b-nav-item>
      <b-nav-item v-if="role === 'ROLE_ADMIN'" class="sidebar-item" to="/users">
        <span style="color: #6c757d">Users</span>
      </b-nav-item>
      <b-nav-item v-if="role === 'ROLE_ADMIN'" class="sidebar-item" to="/users">
        <span style="color: #6c757d">Roles and authorities</span>
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
      showPetChild: false,
    };
  },
  computed: {
    role() {
      return this.$store.state.user.details.role;
    },
    canCreatePet() {
      return this.$store.state.user.details.authorities.find((element: any) => element.authority === "CAN_CREATE_PET");
    },
    canReviewPet() {
      return this.$store.state.user.details.authorities.find((element: any) => element.authority === "CAN_REVIEW_PET");
    },
    canViewMunicipalityPets() {
      return this.$store.state.user.details.authorities.find((element: any) => element.authority === "CAN_VIEW_APPROVED_MUNICIPALITY_PETS");
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
