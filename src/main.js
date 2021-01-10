import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faHome,
  faPlusSquare,
  faUsers,
  faShoppingBasket,
  faClipboardCheck,
  faBook,
  faQuestionCircle,
  faInfoCircle,
  faUserCircle,
  faCheckCircle,
  faChevronLeft,
  faSort,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

library.add(faUserSecret);
library.add(faHome);
library.add(faPlusSquare);
library.add(faUsers);
library.add(faShoppingBasket);
library.add(faClipboardCheck);
library.add(faBook);
library.add(faQuestionCircle);
library.add(faInfoCircle);
library.add(faUserCircle);
library.add(faCheckCircle);
library.add(faChevronLeft);
library.add(faSort);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
