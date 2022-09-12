<template>
  <div style="background-color: #f8f8f8">
    <h3 class="font-weight-bold mt-5">
      <span>Users</span>
      {{ test }}
    </h3>
    <hr class="mb-5 mt-5" />
    <div class="my-main">
      <b-table
        :items="users"
        :fields="fields"
        :filter-included-fields="filterOn"
        stacked="md"
        show-empty
        small
        hover
        @filtered="onFiltered"
      >
        <template #cell(actions)="row">
          <b-button size="sm" variant="danger" @click="showMsgBoxTwo" class="mr-1">
            Delete User
          </b-button>
        </template>

        <template #row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <!-- Info modal -->
      <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
        <pre>{{ infoModal.content }}</pre>
      </b-modal>
    </div>

  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      users: [],
      test: null,
      fields: [
        { key: 'username', label: 'Username' },
        { key: 'enabled', label: 'Enabled' },
        { key: 'actions', label: 'Actions' }
      ],
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      boxTwo: '',
    }
  },
  mounted () {
    this.$axios
      .get('/users')
      .then(response => (this.users = response.data._embedded.users))
  },
  methods: {
    fetchPets() {
      this.$axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.test = response))
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    showMsgBoxTwo() {
      this.boxTwo = ''
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete this user?', {
        size: 'large',
        buttonSize: 'large',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.boxTwo = value
        })
        .catch(err => {
          // An error occurred
        })
    }
  }
})
</script>
<style scoped>
.my-main {
  margin-left: auto;
  margin-right: auto;
}
</style>
