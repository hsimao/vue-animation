import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Drawer.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Cards.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () =>
        import(/* webpackChunkName: "simple" */ './views/Simple.vue')
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: () =>
        import(/* webpackChunkName: "stagger" */ './views/Stagger.vue')
    },
    {
      path: '/state',
      name: 'state',
      component: () =>
        import(/* webpackChunkName: "state" */ './views/State.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () =>
        import(/* webpackChunkName: "timeline" */ './views/Timeline.vue')
    },
    {
      path: '/master',
      name: 'master',
      component: () =>
        import(/* webpackChunkName: "master" */ './views/Master.vue')
    }
  ]
})
