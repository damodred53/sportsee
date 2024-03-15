import { API_ROUTES } from "../Services/Utils.jsx";
import MockedDataUser from "../_Datamock_/MockedData.jsx";



export const getFirstUser = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {

    } else {
        const response = await fetch(API_ROUTES.USER);
    const data = await response.json();
    return data
    }
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

export const getSecondUser = async () => {

  try {
    const response = await fetch(API_ROUTES.USER18);
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

export const getFirstUserActivity = async () => {

  try {
    const response = await fetch(API_ROUTES.ACTIVITY12);
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

export const getSecondUserActivity = async () => {

  try {
    const response = await fetch(API_ROUTES.ACTIVITY18);
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

export const getFirstUserAverageSession = async () => {

  try {
    const response = await fetch(API_ROUTES.AVERAGE_SESSION12);
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

export const getSecondUserAverageSession = async () => {

  try {
    const response = await fetch(API_ROUTES.AVERAGE_SESSION18);
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

export const getFirstUserPerformance = async () => {

  try {
    const response = await fetch(API_ROUTES.PERFORMANCE12);
    const data = await response.json();

    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

export const getSecondUserPerformance = async () => {

  try {
    const response = await fetch(API_ROUTES.PERFORMANCE18);
    const data = await response.json();

    return data
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}




const ObjectToExport = {
  getFirstUser,
   getSecondUser,
   getFirstUserActivity,
   getSecondUserActivity,
   getFirstUserAverageSession,
   getSecondUserAverageSession,
   getFirstUserPerformance,
   getSecondUserPerformance
     };
export default ObjectToExport;








