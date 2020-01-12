import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import ChatDashboard from './views/ChatDashboard.vue'

Vue.use(Router)
//ルーティングを行う。

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //ルートディレクトリがログイン
      path: '/',
      name: 'login',
      component: Login //「Views/Login.vue」のコンポーネントを使用
    },
    {
      //チャット画面(http://localhost:8080/chat)
      path: '/chat',
      name: 'chat',
      component: ChatDashboard,//「Views/CharDashboard.vue」のコンポーネントを使用
    }
  ]
})
