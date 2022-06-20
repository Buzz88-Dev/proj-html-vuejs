import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// library e FontAwesomeIcon le importo sempre quando voglio usare FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// importo solo il tipo di icona che voglio usare; icona solid
// <font-awesome-icon icon="fas fa-search" />
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faSearch)
library.add(faCartArrowDown)
library.add(faCheck)
library.add(faDesktop)
library.add(faChartLine)
library.add(faPlaneDeparture)
library.add(faUserTie)
library.add(faSpinner)
library.add(faBook)
library.add(faThumbsUp)
library.add(faCircle)




/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
