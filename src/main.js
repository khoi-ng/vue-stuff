import { createApp } from 'vue';
import App from './App.vue';
import { router, projectsList } from './router';

const app = createApp(App);

app.use(router);

// globalvariable (List of all projects in src/project folder)
app.provide('projectsList', projectsList);

app.mount('#app');
