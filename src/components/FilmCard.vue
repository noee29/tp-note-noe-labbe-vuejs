<template>
  <div>
    <!-- TODO : Creer la carte d'un film -->
    <!-- - Afficher l'image, le titre, le realisateur, l'annee -->
    <div :class="information.film">
      <img :src="film.image">
      <h2> {{ film.title }}</h2>
      <h3> {{ film.director }}</h3>
      <h4> {{ film.release_date }}</h4>
    </div>
    <!-- - Indicateur de note (vert >= 80, orange >= 60, rouge < 60) -->
    <div v-if="rt_score>=80">Afficher le score en vert</div>
    <div v-else-if="rt_score>=60">Afficher le score en orange</div>
    <div v-if="rt_score<60">Afficher le score en rouge</div>
    <!-- - Emettre un evenement au clic -->

    <!-- - Bouton favori qui utilise le store Pinia -->

    <p>FilmCard - A implementer</p>
  </div>
</template>

<script setup>
const props = defineProps({
  image: { type: Object, required: true },
  title: { type: Object, required: true },
  director: { type: Object, required: true },
  release_date: { type: Object, required: true },
  rt_score: { type: Object, required: true }
})

const emit = defineEmits(['select'])
</script>
