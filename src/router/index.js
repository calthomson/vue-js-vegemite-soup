import Vue from 'vue';
import Router from 'vue-router';
import Post from '../components/Post';
import Blog from '../components/Blog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'feed',
      component: Blog,
    },
    {
      path: '/Post',
      name: 'Post',
      component: Post,
    },
  ],
});
