// import { GetterTree, MutationTree, ActionTree } from "vuex";
// import { RootState } from "~/store";
//
// export const state = () => ({
//   currentUser: {
//     details: {
//       id: "" as string,
//       firstName: "" as string,
//       lastName: "" as string,
//       email: "" as string,
//     },
//     permissions: {
//
//     }
//   }
//   ,
// });
//
// export type UserState = ReturnType<typeof state>;
//
// export const getters: GetterTree<UserState, RootState> = {
//   currentUserDetails: (state) => state.currentUserDetails,
// };
//
// export const mutations: MutationTree<UserState> = {
//   RESET_STATE: (newState) => {
//     Object.assign(newState, state());
//   },
//   SET_CURRENT_USER_DETAILS: (state, userDetails) => {
//     state.currentUserDetails = userDetails;
//   },
// };
//
// export const actions: ActionTree<UserState, RootState> = {
//   async getCurrentUserDetails({ commit, dispatch }): Promise<void> {
//     try {
//       const responseUserDto = await this.$userService.getAccountDetails();
//       const responseUserPermissions = await this.$permissionService.getAllPermissionsForUser(responseUserDto.data.id);
//       const userDetails: UserDetails = new UserDetails(responseUserDto.data, responseUserPermissions.data);
//       commit("SET_CURRENT_USER_DETAILS", userDetails);
//       commit("SET_SHOW_DATA", true, { root: true });
//     } catch (e: unknown) {
//       commit("SET_SHOW_DATA", false, { root: true });
//       dispatch("authHelper/logout", this, { root: true });
//     }
//   },
//
// };
