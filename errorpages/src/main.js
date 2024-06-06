import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes';

const myApp = createApp(App);

myApp.use(router).mount('#app');