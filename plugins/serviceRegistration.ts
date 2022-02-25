// import { Context } from "@nuxt/types";
// import { UserService } from "~/services/UserService"
//
//
// declare module "vue/types/vue" {
//   interface Vue {
//     $userService: UserService;
//   }
// }
//
// declare module "vuex/types/index" {
//   // // make services types visible inside Vuex stores
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   interface Store<S> {
//     $userService: UserService;
//   }
// }
//
// export default async function (ctx: Context, inject: Function) {
//   // const auth = new AuthenticationService(ctx.$axios);
//
//   const axiosInstanceWithToken1 = await axiosInstanceWithToken(ctx);
//
//   const user = new UserService();
//
//   inject("userService", user);
// }
