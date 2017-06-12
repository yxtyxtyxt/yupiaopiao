// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Comment from './comment'
import 'mint-ui/lib/style.css'
import { Header,Button } from 'mint-ui'
import router from './router'

Vue.config.productionTip = false

Vue.component(Header.name,Header)
Vue.component(Button.name,Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<div>
  			<Comment></Comment>
  </div>`,
  components: { Comment,Header,Button,}
})
