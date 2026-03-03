import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// TODO : Creer le store des favoris
// Le store doit contenir :
//   - State : un tableau 'favorites' contenant les films favoris
//   - Getter : 'favoritesCount' qui retourne le nombre de favoris
//   - Getter : 'isFavorite(id)' qui verifie si un film est en favori
//   - Action : 'toggleFavorite(film)' qui ajoute ou retire un film
//   - Action : 'clearFavorites()' qui vide la liste

export const useFavoritesStore = defineStore('favorites', () => {
  // A vous de jouer !
})
