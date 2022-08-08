import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import moment from 'moment';

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('YYYY')
  }
});
Vue.filter('formatDateM', function (value) {
  if (value) {
    return moment(String(value)).format('MM/YYYY')
  }
});



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'



Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)

new Vue({
  render: h => h(App),
}).$mount('#app')


