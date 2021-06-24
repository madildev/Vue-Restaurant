import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Admin from "@/views/Admin/Admin.vue";
import Orders from "@/views/Admin/Orders.vue";
import Profile from "@/views/Admin/Profile.vue";
import Reviews from "@/views/Admin/Reviews.vue";
import Employees from "@/views/Admin/Employees.vue";
import Reservations from "@/views/Admin/Reservations.vue";
import Dashboard from "@/views/Admin/Dashboard.vue";


Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "hero",
      component: Home
    },
    {
      path: "/admin/:userid",
      name: "admin",
      component: Admin,
      props: true,
      meta: { requiresAuth: false },
      children:[
        {
          path:'dashboard',
          name:'dashboard',
          component: Dashboard,
          props: true,
        },
        {
          path:'',
          name:'',
          component: Dashboard,
          props: true,
        },
        {
          path: "profile",
          name: "profile",
          component: Profile,
          props: true,
        },
        {
          path: "orders",
          name: "orders",
          component: Orders,
          props: true,
        },
        {
          path: "employees",
          name: "employees",
          component: Employees,
          props: true,
        },
        {
          path: "reviews",
          name: "reviews",
          component: Reviews,
          props: true,
        },
        {
          path: "reservations",
          name: "reservations",
          component: Reservations,
          props: true,
        },
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    }
  ]
});

export default router;