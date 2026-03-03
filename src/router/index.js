import { createRouter, createWebHistory } from 'vue-router'

// TODO : Importer vos vues
import HomeView from '../views/HomeView.vue'
import FilmDetailView from '../views/FilmDetailView.vue'
import FilmListView from '../views/FilmListView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  // TODO : Configurer vos routes ici
  { path: '/', name: 'Home', component: HomeView },
  { path: '/films', name: 'Films', component: FilmListView},
  { path: '/films/:id', name: 'DetailFilm', component: FilmDetailView},
  { path: '/favorites', name: 'Favoris', component: FavoritesView},
  { path: '/:pathMatch(.*)*', name: 'Page 404', component: NotFoundView}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
