// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Comment  from './comment'
import router from './router'
import { Popup,Header,Button,Swipe, SwipeItem,TabContainer,TabContainerItem,Cell,Switch} from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import '../static/iconfont.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueAxios,axios);
Vue.component(Popup.name, Popup);
Vue.component(Header.name,Header);
Vue.component(Switch.name, Switch);
Vue.component(Button.name,Button)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Swipe.name, Swipe);
Vue.component(Cell.name, Cell);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<div><Comment></Comment></div>`,
  components: {Comment,Header,Button,TabContainer,TabContainerItem,Cell,VueAxios,axios,router,Swipe, SwipeItem}
})
