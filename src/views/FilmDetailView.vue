<template>
  <div>
    <!-- TODO : Afficher le detail d'un film -->
    <!-- - Banniere du film -->
    <!-- - Titre, titre original, description -->
    <!-- - Realisateur, producteur, duree, note -->
    <!-- - Liste des personnages lies au film -->
    <!-- - Bouton "Retour a la liste" -->
    <h1>Detail du film</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const film = ref(null)
const people = ref([])
const loading = ref(false)
const error = ref('')

// TODO : Recuperer l'id 
// TODO : Charger le film et les personnages depuis l'API
</script>
