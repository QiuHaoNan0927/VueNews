import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Follow from '../components/Follow.vue'
import Column from '../components/Column.vue'
import UseInfo from '../components/UserInfo.vue'
import Article from '../components/Article.vue'

Vue.use(Router)

// const Foo = {
//   template: '<div>foo</div>'
// }
// const Bar = {
//   template: '<div>bar</div>'
// }

export default new Router({
  mode: 'history',
  // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/home',
      // name: 'foo',
      component: Home
    },
    {
      path: '/column',
      // name: 'foo',
      component: Column
    },
    {
      path: '/user-info',
      // name: 'foo',
      component: UseInfo
    },
    {
      path: '/article/:id',
      // name: 'foo',
      component: Article
    },
    {
      path: '/follow',
      // name: 'foo',
      component: Follow
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
