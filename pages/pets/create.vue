<template>
  <div>
    <b-card>
      <div style="max-width: 60%; margin: auto">
        <b-form v-if="show" @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Pet name:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Pet category:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>

    </b-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Dog', 'Cat', 'Hamster', 'Rabbit', 'Bird'],
      show: true
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
      const resp = await this.$axios.get("/pets");
      console.log(resp);
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
