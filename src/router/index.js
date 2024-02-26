import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Projects from '../views/ProjectsView.vue';
import Contact from '../views/ContactView.vue';
import NotFoundView from '../views/NotFoundView.vue';
// Import the projects files.

// Import all of the resource routes files.
// https://www.smgaweb.com/blog/dynamically-generating-vue-router-routes-from-directory-structure
function loadRoutes() {
  const context = require.context('../projects', true, /routes.js$/i);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
}

const resourceRoutes = loadRoutes();

const routes = [
  { path: '/', component: Home },
  { path: '/home', redirect: '/' },
  { path: '/about', name: 'About', component: About },
  {
    path: '/projects',
    component: Projects,
    props: true,
  },
  {
    path: '/contact',
    component: Contact,
    props: true,
  },
  {
    path: '/:catchall(.*)*',
    name: 'Not Found',
    component: NotFoundView,
  },
];

const projectsList = [];

resourceRoutes.forEach((route) => {
  routes.push(route[0]);
  projectsList.push(route[0]);
});

console.log('routes', routes);

const router = createRouter({
  // Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHistory(),
  mode: 'history',
  routes, // short for `routes: routes`
});

export { router, projectsList };
