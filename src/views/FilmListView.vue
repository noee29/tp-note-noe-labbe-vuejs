<template>
  <div>
    <!-- TODO : Afficher la liste des films -->
    <!-- - Champ de recherche -->
    <!-- - Grille de FilmCard -->
    <!-- - Gerer le chargement et les erreurs -->
    <h1>Films</h1>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const films = ref([])
const search = ref('')
const loading = ref(false)
const error = ref('')

// TODO : Creer le computed pour filtrer les films par titre

// TODO : Charger les films depuis l'API au montage du composant
</script>
