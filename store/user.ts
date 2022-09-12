import { ActionTree, MutationTree} from 'vuex'
import { RootState } from '~/store'

export const state = () => ({
  token: "",
  details: {
    name: "",
    role: "",
    authorities: []
  }
})

export type UserState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // @ts-ignore
  CHANGE_TOKEN: (state, newToken: string) => (state.token = newToken),
  // @ts-ignore
  SET_USER_DETAILS: (state, newUserDetails: object) => (state.details = {...newUserDetails}),
}

export const actions: ActionTree<UserState, RootState> = {
  printRootState({ rootState }) {
    console.log('accessing rootState:', rootState.name)
  },
}
