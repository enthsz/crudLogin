import Vue from 'vue'

import App from './components/app.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faPencil, faSquarePlus, faCheck, faX, faBackward } from '@fortawesome/free-solid-svg-icons'
import Routes from './routes'
import VueRouter from 'vue-router'



library.add(faTrash, faPencil, faSquarePlus, faCheck, faX, faBackward)


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({
    routes: Routes,
    mode: 'history'

})


new Vue({
    el: '#app',
    components: {
        App
    },

    router

})