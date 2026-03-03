<template>
  <nav>
    <!-- TODO : Creer la barre de navigation -->
    <!-- - Liens vers Accueil, Films, Favoris (avec router-link) -->
    <!-- - Afficher le nombre de favoris a cote du lien "Favoris" -->
    <!-- - Distinguer visuellement le lien actif -->
     
    <router-link to="/">Page d'accueil</router-link>
    <router-link to="/films">Liste des films</router-link>
    <router-link to="/favorites">Favoris</router-link>

  </nav>
</template>

<script setup>
// TODO : Importer le store des favoris pour afficher le compteur
</script>
