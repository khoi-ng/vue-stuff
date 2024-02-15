import { createWebHashHistory, createRouter } from 'vue-router';
import HelloWorld from '../views/HelloWorld.vue';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
