import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import FilmoveComponent from './components/FilmoveComponent.vue';
import RezervacijaComponent from './components/RezervacijaComponent.vue';
import ProfilComponent from './components/ProfilComponent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: FilmoveComponent },
  { path: '/rezervacija', component: RezervacijaComponent },
  { path: '/profil', component: ProfilComponent }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
