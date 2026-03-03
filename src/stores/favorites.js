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
  // STATE : tableau favorites
  const favorites = ref([])

  // GETTER : 'favoritesCount'
  const favoritesCount = computed(() =>
    favorites.value.length)

  // GETTER : 'isFavorite(id)'
  const isFavorite = (id) => favorites.value.some(f => 
    f.id===id)


  // ACTION : 'toggleFavorite(film)', addFavorite et removeFavorite
  const addFavorite = (f) => favorites.value.push(f)

  const removeFavorite = (id) => {
    favorites.value = favorites.value.filter(f =>
      f.id !== id)
  }

  const toggleFavorite = (f) => isFavorite(f.id) ? removeFavorite(f.id)
: addFavorite(f)

return { favorites, favoritesCount, isFavorite, addFavorite, removeFavorite, toggleFavorite}

// ACTION : 'clearFavorites()'

})
