import Vue from 'vue'
import App from './App.vue'

// library e FontAwesomeIcon le importo sempre quando voglio usare FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// importo solo il tipo di icona che voglio usare; icona solid
// <font-awesome-icon icon="fas fa-search" />
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faSearch)
library.add(faCartArrowDown)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
