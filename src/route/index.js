import {createRouter, createWebHistory} from "vue-router"
import LandingPage from "../components/LandingPage.vue"
import About from "../components/About.vue"
import Services from "../components/Services.vue"
import Contact from "../components/Contact.vue"


const routes = [
  {
    path: "/",
    name: "home",
    component: LandingPage
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/services",
    name: "services",
    component: Services
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router