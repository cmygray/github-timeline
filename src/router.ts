import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/repos',
      name: 'repos.index',
      component: () =>
        import(/* webpackChunkName: "repos" */ './views/RepoList.vue'),
      props: route => ({
        userId: route.query.userId,
      }),
    },
  ],
});
