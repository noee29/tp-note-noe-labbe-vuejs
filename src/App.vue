<template>
  <div id="app">
    <!-- TODO : Ajouter la NavBar ici -->

    <!-- TODO : Ajouter <router-view /> pour afficher les pages -->
     <h1>Studio Ghibli Explorer</h1>
     <p>Bienvenue sur le site du Studio Ghibli Explorer, vous pouvez désormais consulter des films</p>
     <button>Lien vers la liste des films</button>

    <FilmCard
      v-for="f in films" :key="f.id"
      :films="f"
      @select="selected = $event">
    </FilmCard>
  </div>
</template>

<script setup>
// TODO : Importer vos composants (NavBar, etc.)
import FilmCard from './components/FilmCard.vue';
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
