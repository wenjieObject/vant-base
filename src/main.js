
import '../src/assets/reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Collapse, CollapseItem,Grid, GridItem,NavBar,Icon,Swipe, SwipeItem,Form,Field
,Search ,Lazyload ,Image as VanImage ,Tabbar, TabbarItem,GoodsAction, GoodsActionIcon, GoodsActionButton   } from 'vant';


Vue.config.productionTip = false

Vue.use(Button).use(Collapse).use(CollapseItem).use(Grid).use(GridItem).use(NavBar).use(Icon)
.use(Swipe).use(SwipeItem).use(Form).use(Field).use(Search).use(Lazyload).use(VanImage).use(Tabbar).use(TabbarItem)
.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
