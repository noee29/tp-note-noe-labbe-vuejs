import axios from 'axios'

// Configuration globale d'Axios pour l'API Studio Ghibli
// Documentation de l'API : https://ghibliapi.vercel.app
//
// Endpoints disponibles :
//   GET /films        - Liste de tous les films
//   GET /films/:id    - Detail d'un film
//   GET /people       - Liste des personnages
//   GET /people/:id   - Detail d'un personnage
//   GET /locations     - Liste des lieux
//   GET /species      - Liste des especes

const api = axios.create({
  baseURL: 'https://ghibliapi.vercel.app',
})

export default api
