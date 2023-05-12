import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/users',
      component: UsersList,
    },
  ],
  linkActiveClass: 'active', // a 태그의 className 중 router-link-active 의 이름을 임의로 바꿔줄 수 있다.
});

const app = createApp(App);

app.use(router);

app.mount('#app');
