import { API_ROUTES } from "../Services/Utils.jsx";
import MockedDataUser from "../_Datamock_/MockedData.jsx";
import allData from "../Services/ConfigurationUser.jsx";

const id = "0"
export const getUser = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {

      const response = MockedDataUser.USER_MAIN_DATA[id]
      const data = allData.gatheringData(response)

      return data

    } else {

      const response = await fetch(API_ROUTES.USER);
      const data = await response.json();

      const formatedData = allData.gatheringData(data.data)

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
      const data = allData.gatheringDataActivity(response)


      return data
    } else {
      const response = await fetch(API_ROUTES.ACTIVITY);
      const data = await response.json();
      const formatedData = allData.gatheringDataActivity(data.data)
      
      return formatedData
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}


export const getUserAverageSession = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_AVERAGE_SESSIONS[id];
      const data = allData.gatheringDataAverageSession(response);


      return data
    } else {
      const response = await fetch(API_ROUTES.AVERAGE_SESSION);
      const data = await response.json();
      const formatedData = allData.gatheringDataAverageSession(data.data)
      return formatedData
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}


export const getUserPerformance = async () => {

  try {
    if (MockedDataUser && MockedDataUser != null) {
      const response = MockedDataUser.USER_PERFORMANCE[id];
      const data = allData.gatheringDataPerformance(response);

      return data
    } else {
      const response = await fetch(API_ROUTES.PERFORMANCE);
      const data = await response.json();
      const formatedData = allData.gatheringDataPerformance(data.data)
      return formatedData
    }
    
    
  } catch (error) {
    console.log("Impossible d'aller chercher les données", error);
  }
}

const ObjectToExport = {
    getUser,
   getUserActivity,
   getUserAverageSession,
   getUserPerformance
     }; 
export default ObjectToExport;








