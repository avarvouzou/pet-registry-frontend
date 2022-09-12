<template>
  <div>
    <div style="padding: 30px">
      <h3 class="mt-2 mb-4">Create a new pet</h3>
      <b-card style="max-width: 80%; margin: auto">
        <b-form novalidate class="mt-3" @submit.prevent="onSubmit" @reset="onReset">

        <div class="row">
          <b-form-group label-align="left" label="Pet name:" label-for="pet-name" class="col-md-6">
            <b-form-input
              id="pet-name"
              v-model="createPetDetails.name"
              placeholder="Enter pet name"
              required
              maxlength="20"
              :state="nameValidation"
            ></b-form-input>
            <b-form-invalid-feedback>Name is required</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group label-align="left" label="Pet category:" label-for="pet-type" class="col-md-6">
            <b-form-select
              id="pet-type"
              v-model="createPetDetails.type"
              :options="petTypes"
              :state="typeValidation"
              required
            ></b-form-select>
            <b-form-invalid-feedback>Type is required</b-form-invalid-feedback>
          </b-form-group>
        </div>

        <div class="row">
          <b-form-group label-align="left" label="Pet sex:" label-for="pet-sex" class="col-md-6">
            <b-form-select
              id="pet-sex"
              v-model="createPetDetails.sex"
              :options="petSex"
              :state="sexValidation"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group label-align="left" label="Pet Birthday:" label-for="pet-birthday" class="col-md-6">
            <b-form-datepicker id="pet-birthday" v-model="createPetDetails.birthday" :state="birthdayValidation" :max="maxDate" class="mb-2"></b-form-datepicker>
          </b-form-group>
        </div>

        <div class="row">
          <b-form-group label-align="left" label="Pet Breed:" label-for="pet-breed" class="col-md-6">
            <b-form-input
              id="pet-breed"
              v-model="createPetDetails.breed"
              placeholder="Enter pet breed"
              required
              :state="breedValidation"
            ></b-form-input>
          </b-form-group>
          <b-form-group label-align="left" label="Pet Microchip Number:" label-for="pet-microchip" class="col-md-6">
            <b-form-input
              id="pet-microchip"
              v-model="createPetDetails.microchipNumber"
              placeholder="Enter Microchip Number"
              type="number"
              required
              :state="microchipNumberValidation"
            ></b-form-input>
          </b-form-group>
        </div>
          <div class="d-flex justify-content-end align-items-center mt-3 mb-3">
           <b-button type="reset" class="mr-2 g" variant="secondary">Reset</b-button>
            <b-button type="submit" class="ml-2" variant="primary" >Create pet</b-button>
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
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const maxDate = new Date(today)
    return {
      createPetDetails: new CreatePet,
      petTypes: [{ text: 'Please select an option', value: '' }, 'Dog', 'Cat', 'Hamster', 'Rabbit', 'Bird'],
      petSex: [{ text: 'Please select an option', value: '' }, 'male', 'female'],
      maxDate,
      isSubmitButtonPressed: false,
    }
  },
  computed: {
    nameValidation(): boolean | null {
      if (!this.isSubmitButtonPressed) {
        return  null
      }
      return this.createPetDetails.name !== "";
    },
    typeValidation(): boolean | null {
      if (!this.isSubmitButtonPressed) {
        return  null
      }
      return this.createPetDetails.type !== "";
    },
    sexValidation(): boolean | null {
      if (!this.isSubmitButtonPressed) {
        return  null
      }
      return this.createPetDetails.sex !== "";
    },
    birthdayValidation(): boolean | null {
      if (!this.isSubmitButtonPressed) {
        return  null
      }
      return this.createPetDetails.birthday !== "";
    },
    breedValidation(): boolean | null {
      if (!this.isSubmitButtonPressed) {
        return  null
      }
      return this.createPetDetails.breed !== "";
    },
    microchipNumberValidation(): boolean | null {
      if (!this.isSubmitButtonPressed) {
        return  null
      }
      return this.createPetDetails.microchipNumber !== "";
    },
    isFormValidated(): boolean | null {
      return this.nameValidation &&
        this.typeValidation &&
        this.sexValidation &&
        this.birthdayValidation &&
        this.breedValidation &&
        this.microchipNumberValidation;
    },
  },
  methods: {
    onSubmit() {
      this.isSubmitButtonPressed = true;
      if (!this.isFormValidated) {
        return;
      }
      this.createPet();
    },
    async createPet() {
      // @ts-ignore
      await this.$axios.post('/pets/', this.createPetDetails).then((response) => {
       console.log(response)
      })
    },
    onReset() {
      this.createPetDetails = new CreatePet;
    }
  }
})
</script>
<style scoped>
label {
  text-align: left !important;
}
</style>
