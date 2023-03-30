import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ProductsPage.vue";
import { auth } from "@/config/firebase";

const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) next({ name: "Login", params: {} });
  else next();
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth,
  },

  {
    path: "/products/:id",
    name: "ProductDetail",
    component: import("../views/ProductDetailPage.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: import("../views/CartPage.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/:pathMatch(.*)*",
    component: import("../views/NotFoundPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: import("../views/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: import("../views/ForgotPassword.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: import("../views/AboutPage.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/contact",
    name: "Contact",
    component: import("../views/ContactPage.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/profile",
    name: "Profile",
    component: import("../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: import("../views/Logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
