// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Comment  from './comment'
import router from './router'
import { Popup,Header,Button,Swipe, SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);
Vue.component(Popup.name, Popup);
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<div><Comment></Comment></div>`,
  components: { Comment,Header,Button,VueAxios,axios,router,Swipe, SwipeItem}
})
