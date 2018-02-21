import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import BigShaq from '@/components/BigShaq';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/bigshaq',
      name: 'BigShaq',
      component: BigShaq,
    },
  ],
});
