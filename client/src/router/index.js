import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

//These are the imports for the admin
import Admin from "@/views/Admin/Admin.vue";
import Orders from "@/views/Admin/Orders.vue";
import Profile from "@/views/Admin/Profile.vue";
import Reviews from "@/views/Admin/Reviews.vue";
import Employees from "@/views/Admin/Employees.vue";
import Reservations from "@/views/Admin/Reservations.vue";
import Dashboard from "@/views/Admin/Dashboard.vue";

//These are the imports for the customers
import CAdmin from "@/views/Customers/Admin.vue";
import COrders from "@/views/Customers/Orders.vue";
import CDetails from "@/views/Customers/DishDetails.vue";
import CProfile from "@/views/Customers/Profile.vue";
import CReservations from "@/views/Customers/Reservations.vue";
import CDashboard from "@/views/Customers/Dashboard.vue";


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
    //These are the routes for the admin
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
      ],
      },
      //This are the routes for the Customers
      {    
      path: "/customer/:cusid",
      name: "customer",
      component: CAdmin,
      props: true,
      meta: { requiresAuth: false },
      children:[
        {
          path:'cdashboard',
          name:'cdashboard',
          component: CDashboard,
          props: true,
        },
        {
          path:'',
          name:'',
          component: CDashboard,
          props: true,
        },
        {
          path: "cprofile",
          name: "cprofile",
          component: CProfile,
          props: true,
        },
        {
          path: "corders",
          name: "corders",
          component: COrders,
          props: true,
        },
        {
          path: "creservations",
          name: "creservations",
          component: CReservations,
          props: true,
        },
        {
          path: "details/:dishid",
          name: "cdetails",
          component: CDetails,
          props: true
        }
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