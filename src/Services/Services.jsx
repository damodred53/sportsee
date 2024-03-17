import { API_ROUTES } from "../Services/Utils.jsx";
import MockedDataUser from "../_Datamock_/MockedData.jsx";
import gatheringData from "../Services/ConfigurationUser.jsx";

const id = "0"
export const getUser = async () => {

  
  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_MAIN_DATA[id]
      /*console.log(response)*/
      const data = gatheringData(response)
      
      /*const data = await response.json();*/
      console.log("voici la donnée mockée : ", data)
      return data
    } else {
      console.log("donnée non mockée ")
      const response = await fetch(API_ROUTES.USER);
      
      const data = await response.json();
      console.log("voici la data non mockée : ", data.data)
      const formatedData = gatheringData(data.data)
      console.log("voici la donnée non mockée : ", formatedData)
      return formatedData
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}


export const getUserActivity = async () => {

  
  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_ACTIVITY[id];
      
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


export const getUserAverageSession = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_AVERAGE_SESSIONS[id];
      
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


export const getUserPerformance = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_PERFORMANCE[id];
      
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








