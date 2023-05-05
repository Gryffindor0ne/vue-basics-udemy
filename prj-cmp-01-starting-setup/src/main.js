import { createApp } from 'vue';

import App from './App.vue';
import LearningResource from './components/learning-resources/LearningResource.vue';

const app = createApp(App);

app.component('learning-resource', LearningResource);
app.mount('#app');
