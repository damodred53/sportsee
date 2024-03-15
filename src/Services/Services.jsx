import { API_ROUTES } from "../Services/Utils.jsx";
import MockedDataUser from "../_Datamock_/MockedData.jsx";



export const getUser = async () => {

  const id = "1"
  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_MAIN_DATA[id];
      
      /*const data = await response.json();*/
      console.log("voici la donnée mockée : ", response)
      return response
    } else {
      const response = await fetch(API_ROUTES.USER);
      
      const data = await response.json();
      console.log("voici la donnée non mockée : ", data)
      return data
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}


/*export const getUserActivity = async () => {

  try {
    const response = await fetch(API_ROUTES.ACTIVITY);
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}*/

export const getUserActivity = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_ACTIVITY[0];
      
      /*const data = await response.json();*/
      console.log("voici la donnée mockée : ", response)
      return response
    } else {
      const response = await fetch(API_ROUTES.ACTIVITY);
      const data = await response.json();
      return data
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

/*export const getUserAverageSession = async () => {

  try {
    const response = await fetch(API_ROUTES.AVERAGE_SESSION);
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}*/

export const getUserAverageSession = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_AVERAGE_SESSIONS[0];
      
      /*const data = await response.json();*/
      console.log("voici la donnée mockée : ", response)
      return response
    } else {
      const response = await fetch(API_ROUTES.AVERAGE_SESSION);
      const data = await response.json();
      return data
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

/*export const getUserPerformance = async () => {

  try {
    const response = await fetch(API_ROUTES.PERFORMANCE);
    const data = await response.json();

    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}*/

export const getUserPerformance = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_PERFORMANCE[0];
      
      /*const data = await response.json();*/
      console.log("voici la donnée mockée : ", response)
      return response
    } else {
      const response = await fetch(API_ROUTES.PERFORMANCE);
      const data = await response.json();
      return data
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}




const ObjectToExport = {
  getUser,
   getUserActivity,
   getUserAverageSession,
   getUserPerformance,
     };
export default ObjectToExport;







