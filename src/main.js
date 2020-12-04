import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTailwind from 'vue-tailwind'
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueTailwind);


// import LoadScript from 'vue-plugin-load-script';
// Vue.use(LoadScript);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// import 'vue-tailwind/dist/renderers/'

import App from './App.vue'
import './css/app.css'
import './css/foundation.min.css'
import "@/assets/styles/main.css";

// import '../src/js/app.js'

// Vue.loadScript("../src/js/app.js");

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
}).$mount('#app')