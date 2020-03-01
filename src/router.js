import Vue from 'vue';
import Router from 'vue-router';
import Panel from './views/Panel.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'panel',
      component: Panel
    },
    {
      path: '/model1',
      name: 'model1',
      // route level code-splitting
      // this generates a separate chunk (ThreeModel.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "ThreeModel" */ './views/ThreeModel.vue')
    },
    {
      path: '/lito',
      name: 'lito',
      // route level code-splitting
      // this generates a separate chunk (ThreeModel.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "ThreeModel" */ './views/Lito.vue')
    }
  ]
})
