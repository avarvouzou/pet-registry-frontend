<template>
  <div style="margin: auto; width: 50%; padding-top: 8rem">
    <h3 class="mt-5 mb-5">Please sign in</h3>
    <b-form style="width: 30%; margin: auto" @submit.prevent="login" >
      <b-form-group
        id="username"
        label="Username:"
        label-for="username"
        label-align="left"
      >
        <b-form-input
          id="username"
          v-model="form.username"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="password"
        label="Password:"
        label-for="input-2"
        label-align="left"
      >
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" style="width: 100%" class="mt-3"
        >Sign in</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: "",
      },
      show: true,
    }
  },
  methods: {
    async login() {
      await this.$axios.post('/login', {
        username: this.form.username,
        password: this.form.password
      }).then((response) => {
        this.$store.commit('user/CHANGE_TOKEN', response.data.token)
        this.$axios.setToken(this.$store.state.user.token, 'Bearer')
        this.$axios.get('/users').then((response) => console.log(response))
        this.fetchUserDetails();
      })
    },
    async fetchUserDetails() {
       await this.$axios.get('/me').then((response) => {
        const role = response.data.authorities.pop().authority
        this.username = response.data.name
        const details = {
          name: response.data.name,
          role,
          authorities: response.data.authorities
        };
        this.$store.commit('user/SET_USER_DETAILS', details)
      })
        .catch(() => {
          this.$store.commit('user/SET_USER_DETAILS', {
            name: "",
            role: "",
            authorities: []
          })
          this.$router.push("login")
        }).finally(() =>  this.$router.push('/') )

    },
  },
}
</script>
<style>
body {
  background-image: url('./assets/images/pet-background_1920x1080.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
