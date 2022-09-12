<template>
  <div style="background-color: #f8f8f8">
    <h3 class="font-weight-bold pt-4">
      <span>Pets</span>
      {{ test }}
    </h3>
    <hr class="mb-5 mt-5" />
    <div class="my-main">
      <b-table
        :items="petDetails"
        :fields="fields"
        stacked="md"
        show-empty
        small
        hover
      >
        <template #cell(name)="row" >
          <nuxt-link to="/pets">
            {{ row.value.first }} {{ row.value.last }}
          </nuxt-link>
        </template>
        <template #cell(actions)="row">
          <b-button v-if="canReviewPet" size="sm" variant="primary" @click="" class="mr-1">
            Approve
          </b-button>
          <b-button v-if="canReviewPet" size="sm" variant="secondary" @click="" class="mr-1">
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
export default Vue.extend({
  data() {
    return {
      petDetails: [],
      test: null,
      fields: [
        { key: 'name', label: 'Pet name' },
        { key: 'microchipNumber', label: 'Microchip number' },
        { key: 'type', label: 'Type' },
        { key: 'sex', label: 'Gender' },
        { key: 'birthday', label: 'Pet birthday', sortable: true, class: 'text-center' },
        { key: 'breed', label: 'Breed' },
        { key: 'medicalHistory', label: 'Medical History' },
        { key: 'status', label: 'Status' },
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
  computed: {
    canReviewPet() {
      return this.$store.state.user.details.authorities.find((element) => element.authority === "CAN_REVIEW_PET");
    },
  },
  created () {
    this.$axios
      .get('/pets?own=true')
      .then(response => ( this.petDetails = response.data))
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
    approvePet() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    showMsgBoxTwo() {
      this.boxTwo = ''
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete this pet?', {
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
