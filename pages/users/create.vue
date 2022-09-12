<template>
  <div>
    <div style="padding: 30px; background-color: #f8f8f8">
      <h3 class="mt-2 mb-4">Create a new user</h3>
      <b-card style="max-width: 80%; margin: auto">
        <b-form novalidate class="mt-3" @submit.prevent="onSubmit" @reset="onReset">

          <div class="row">
            <b-form-group label-align="left" label="Username:" label-for="pet-name" class="col-md-6">
              <b-form-input
                id="pet-name"
                v-model="createUser.username"
                placeholder="Enter username"
                required
                maxlength="20"
              ></b-form-input>
              <b-form-invalid-feedback>Username is required</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label-align="left" label="Password:" label-for="pet-name" class="col-md-6">
              <b-form-input
                id="pet-name"
                v-model="createUser.password"
                placeholder="Enter password"
                required
                maxlength="20"
              ></b-form-input>
              <b-form-invalid-feedback>password is required</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label-align="left" label="User role:" label-for="pet-type" class="col-md-6">
              <b-form-select
                id="pet-type"
                v-model="createUser.role"
                :options="userRoles"
                required
              ></b-form-select>
              <b-form-invalid-feedback>Type is required</b-form-invalid-feedback>
            </b-form-group>
          </div>


          <div class="d-flex justify-content-end align-items-center mt-3 mb-3">
            <b-button type="reset" class="mr-2 g" variant="secondary">Reset</b-button>
            <b-button type="submit" class="ml-2" variant="primary" >Create user</b-button>
          </div>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { CreatePet } from "@/models/Pet";

export default Vue.extend({
  data() {
    return {
      createUser: {},
      userRoles: [{ text: 'Please select an option', value: '' }, 'admin', 'citizen', 'vet', 'municipal_employee'],
      isSubmitButtonPressed: false,
    }
  },
  computed: {
    // nameValidation(): boolean | null {
    //   if (!this.isSubmitButtonPressed) {
    //     return  null
    //   }
    //   return this.createUser.use !== "";
    // },
    //
    // isFormValidated(): boolean | null {
    //   return this.nameValidation
    // },
  },
  methods: {
    onSubmit() {
      // this.isSubmitButtonPressed = true;
      // if (!this.isFormValidated) {
      //   return;
      // }
      this.createPet();
    },
    async createPet() {
      // @ts-ignore
      this.createUser = {
        username: 'admin1',
        password: 'admin1',
        role_id: 1,
        municipality_id: 1
      }
      // @ts-ignore
      await this.$axios.put('/users', this.createUser).then((response) => {
        console.log(response)
      })
    },
  }
})
</script>
<style scoped>
label {
  text-align: left !important;
}
</style>
