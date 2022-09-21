import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/register",
    name: "register",
    component: Register,
  },

  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new Router({ routes });

export default router;
