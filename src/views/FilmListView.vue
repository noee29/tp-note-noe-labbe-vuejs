<template>
  <div>
    <!-- TODO : Afficher la liste des films -->
     <FilmCard
      v-for="f in films" :key="f.id"
      :films="f">
    </FilmCard>
    
    <!-- - Champ de recherche -->
    <input v-model="model" placeholder="Rechercher un film...">

    <!-- - Grille de FilmCard -->
    <!-- - Gerer le chargement et les erreurs -->
    <h1>Films</h1>
  </div>

  <router-link to="/films">Liste des films</router-link>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'


const films = ref([])
const search = ref('')
const loading = ref(false)
const error = ref('')
const model = defineModel()

// TODO : Creer le computed pour filtrer les films par titre

// TODO : Charger les films depuis l'API au montage du composant
</script>
