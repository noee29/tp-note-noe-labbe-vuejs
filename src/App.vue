<template>
  <div id="app">
    <!-- TODO : Ajouter la NavBar ici -->

    <!-- TODO : Ajouter <router-view /> pour afficher les pages -->

    <nav>
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/films">Liste films</RouterLink>
    <RouterLink to="/films/:id">Liste détaillée des films</RouterLink>
    <RouterLink to="/favorites">Liste des favoris</RouterLink>
    <RouterLink to="/:pathMatch(.*)*">Page 404</RouterLink>
    <router-view></router-view>
    </nav>

  </div>
</template>

<script setup>
// TODO : Importer vos composants (NavBar, etc.)
import FilmCard from './components/FilmCard.vue';
import NavBar from './components/NavBar.vue';
import { ref } from 'vue'
const selected = ref(null)

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  min-height: 100vh;
}
</style>
