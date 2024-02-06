import Vue from 'vue';
import VueRouter from 'vue-router';
import FilmoviComponent from './components/FilmoviComponent.vue';
import RezervacijaComponent from './components/RezervacijaComponent.vue';
import ProfilComponent from './components/ProfilComponent.vue';
import PocetnaComponent from './components/PocetnaComponent.vue';
import KupovinaComponent from './components/KupovinaComponent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/pocetna', component: PocetnaComponent },
  { path: '/repertoar', component: FilmoviComponent },
  { path: '/film', component: RezervacijaComponent },
  { path: '/kupovina', component: KupovinaComponent },
  { path: '/profil', component: ProfilComponent }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
