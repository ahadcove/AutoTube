// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAuthenticate from 'vue-authenticate'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueLocalStorage from 'vue-ls';
import axios from 'axios';
import VueAxios from 'vue-axios';
import NavBar from './Components/NavBar.vue';
import Footer from './Components/Footer.vue';
import Search from './Components/Search.vue';
import ErrorShow from './Components/ErrorShow.vue';
import VideoPlayer from './Components/VideoPlayer.vue';
import FilterMenu from './Components/FilterMenu.vue';
import Playlist from './Components/Playlist.vue';
import StorePlugin from './Plugins/StorePlugin';
import { BeatLoader } from 'vue-spinner/dist/vue-spinner.min.js';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import 'animate.css/animate.min.css'

// globally (in your main .js file)
export const EventBus = new Vue();

Vue.use(StorePlugin);

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8080', // Your API domain
  
  providers: {
    google: {
      clientId: global.CLIENT_ID,
      redirectUri: 'http://localhost:8080/auth', // Your client app URL
      responseType: 'token',
      scope: ['https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/youtube.force-ssl', 'https://www.googleapis.com/auth/youtube.readonly',],
    }
  }
})
Vue.use(Vuex);
Vue.use(VueYouTubeEmbed);
Vue.use(VueLocalStorage);

Vue.component('NavBar', NavBar);
Vue.component('Footer', Footer);
Vue.component('Search', Search);
Vue.component('ErrorShow', ErrorShow);
Vue.component('FilterMenu', FilterMenu);
Vue.component('VideoPlayer', VideoPlayer);
Vue.component('Playlist', Playlist);
Vue.component('BeatLoader', BeatLoader);
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
