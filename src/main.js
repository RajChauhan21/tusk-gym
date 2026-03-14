import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route'
import AOS from "aos"
import "aos/dist/aos.css"

const app = createApp(App)

app.use(router)

AOS.init({
    easing: 'ease-out-back',
    duration: 1000,     // animation duration
    once: true,         // animation runs only once
})

app.mount("#app")