import { createApp } from 'vue';
import App from './App.vue';
import { router } from './composables/useRouter.js';

if (localStorage.getItem('key')) {
  createApp(App).use(router).mount('#app');
}
