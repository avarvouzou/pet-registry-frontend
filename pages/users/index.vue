<template>
  <div style="background-color: #f8f8f8">
    <h3 class="font-weight-bold mt-5">
      <span>Pet registrations</span>
      {{ test }}
    </h3>
    <hr class="mb-5 mt-5" />
    <div class="my-main">
      <b-table
        :items="items"
        :fields="fields"
        :filter="filter"
        :filter-included-fields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        stacked="md"
        show-empty
        small
        hover
        @filtered="onFiltered"
      >
        <template #cell(name)="row" >
          <nuxt-link to="/pets">
            {{ row.value.first }} {{ row.value.last }}
          </nuxt-link>
        </template>
        <template #cell(actions)="row">
          <b-button size="sm" variant="primary" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Approve
          </b-button>
          <b-button size="sm" variant="secondary" @click="info(row.item, row.index, $event.target)" class="mr-1">
            Disapprove
          </b-button>
          <b-button size="sm" variant="info" @click="row.toggleDetails">
            {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
          </b-button>
          <b-button size="sm" variant="danger" @click="showMsgBoxTwo" class="mr-1">
            Delete pet
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
import {PetDetails} from "@/models/Pet";

export default Vue.extend({
  data() {
    return {
      petDetails: new PetDetails(),
      test: null,
      items: [
        { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' } },
        { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
        {
          isActive: false,
          age: 9,
          name: { first: 'Mini', last: 'Navarro' },
        },
        { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
        { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
        { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
        { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
        {
          isActive: true,
          age: 87,
          name: { first: 'Larsen', last: 'Shaw' },
        },
        { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
        { isActive: false, age: 22, name: { first: 'Genevieve', last: 'Wilson' } },
        { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
        { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
      ],
      fields: [
        { key: 'name', label: 'Person full name', sortable: true, sortDirection: 'desc' },
        { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
        {
          key: 'isActive',
          label: 'Is Active',
          formatter: (value, key, item) => {
            return value ? 'Yes' : 'No'
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        },
        { key: 'actions', label: 'Actions' }
      ],

      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      boxTwo: '',
      columns: [
        { key: "selected", label: "", sortable: false, order: 0 },
        {
          key: "id",
          sortable: true,
          label: "",
          tdClass: "break-text-all",
        },
        {
          key: "name",
          sortable: true,
          label: "realmname",
          tdClass: "break-text-all",
        },
        {
          key: "archived",
          sortable: false,
          label: ""
        },
        {
          key: "actions",
          sortable: false,
          label: "", // empty label to leave column header blank
          thClass: "",
        },
      ],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  mounted () {
    this.$axios
      .get('/users')
      .then(response => (console.log(response)))
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
