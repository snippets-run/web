import { createRouter, createWebHashHistory } from "vue-router";

const topPages = [
  // {
  //   path: "/",
  //   name: "Foo",
  //   component: FooComponent,
  // }
];

const routes = [...topPages];

export const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export function useRouter() {
  return { router, routes, topPages };
}
