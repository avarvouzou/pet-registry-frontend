import { GetterTree, ActionTree } from 'vuex'

export const state = () => ({
  name: 'Me',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  name: state => state.name,
}



export const actions: ActionTree<RootState, RootState> = {
  async fetchThings({ commit }) {
    // @ts-ignore
    const things = await this.$axios.$get('/things')
    console.log(things)
    commit('CHANGE_NAME', 'New name')
  },
}
