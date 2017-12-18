import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueAuthenticate from 'vue-authenticate'
import VueYouTubeEmbed from 'vue-youtube-embed'
import axios from 'axios';
import VueAxios from 'vue-axios';
import NavBar from './Components/NavBar.vue';
import MobileMenu from './Components/MobileMenu.vue';
import Footer from './Components/Footer.vue';
import Search from './Components/Search.vue';
import ErrorShow from './Components/ErrorShow.vue';
import VideoPlayer from './Components/VideoPlayer.vue';
import FilterMenu from './Components/FilterMenu.vue';
import Playlist from './Components/Playlist.vue';
import StorePlugin from './Plugins/StorePlugin';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import 'animate.css/animate.min.css'

export const EventBus = new Vue();

Vue.use(StorePlugin);

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  // baseUrl: 'http://localhost:8080', // Your API domain
  baseUrl: `${process.env.HOST}`, // Your API domain

  providers: {
    google: {
      clientId: global.CLIENT_ID,
      redirectUri: `${process.env.HOST}/auth`, // Your client app URL
      // redirectUri: `localhost:8080/auth`, // Your client app URL
      responseType: 'token',
      scope: ['https://www.googleapis.com/auth/youtube', 'https://www.googleapis.com/auth/youtube.force-ssl', 'https://www.googleapis.com/auth/youtube.readonly',],
    }
  }
})
Vue.use(Vuex);
Vue.use(VueYouTubeEmbed);

Vue.component('NavBar', NavBar);
Vue.component('MobileMenu', MobileMenu);
Vue.component('Footer', Footer);
Vue.component('Search', Search);
Vue.component('ErrorShow', ErrorShow);
Vue.component('FilterMenu', FilterMenu);
Vue.component('VideoPlayer', VideoPlayer);
Vue.component('Playlist', Playlist);
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
