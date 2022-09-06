import { GetterTree, ActionTree, MutationTree} from 'vuex'
import { RootState } from '~/store'

export const state = () => ({
  more: 3,
  token: ""
})

export type UserState = ReturnType<typeof state>

export const getters: GetterTree<UserState, RootState> = {
  ax: state => state.token,
}

export const mutations: MutationTree<RootState> = {
  // @ts-ignore
  CHANGE_TOKEN: (state, newToken: string) => (state.token = newToken),
}

export const actions: ActionTree<UserState, RootState> = {
  printRootState({ rootState }) {
    console.log('accessing rootState:', rootState.name)
  },
}
