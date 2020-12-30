
import '../src/assets/reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Collapse, CollapseItem,Grid, GridItem,NavBar,Icon   } from 'vant';


Vue.config.productionTip = false

Vue.use(Button).use(Collapse).use(CollapseItem).use(Grid).use(GridItem).use(NavBar).use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
