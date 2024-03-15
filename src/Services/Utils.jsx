const API_URL = 'http://localhost:3000';
const id = 18;
export const API_ROUTES = {

    /* utilisateur fictif */
  USER: `${API_URL}/user/${id}`,
  ACTIVITY: `${API_URL}/user/${id}/activity`,
  AVERAGE_SESSION: `${API_URL}/user/${id}/average-sessions`,
  PERFORMANCE: `${API_URL}/user/${id}/performance`,


};