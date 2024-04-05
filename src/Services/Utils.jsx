
// constante gardant le chemin de l'API
const API_URL = 'http://localhost:3000';

// la constante id permet dans le cas d'utilisation de l'api de selectionner l'utlisateur 12 = Karl
// 18 = Cecilia
const id = 18;
export const API_ROUTES = {

    /* utilisateur fictif en provenance de l'API */
  USER: `${API_URL}/user/${id}`,
  ACTIVITY: `${API_URL}/user/${id}/activity`,
  AVERAGE_SESSION: `${API_URL}/user/${id}/average-sessions`,
  PERFORMANCE: `${API_URL}/user/${id}/performance`,


};