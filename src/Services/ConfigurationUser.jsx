import allDataUser from "../Components/ClassUser/ClassUser"

const gatheringData = (user) => {

        console.log("voici les données reçu en entrée de gatheringData :", user)
        const userProfile = new allDataUser.UserProfile(user) 
        console.log("voici les données formatées :", userProfile)

        return userProfile
      
}

const gatheringDataActivity = (activity) => {

        console.log("voici les données reçu en entrée de gatheringData :", activity)
        const userProfileActivity = new allDataUser.UserProfileActivity(activity)    
        console.log("voici les données formatées :", userProfileActivity)

        return userProfileActivity  
}

const gatheringDataAverageSession = (activity) => {

    console.log("voici les données reçu en entrée de gatheringData :", activity)
    const userProfileAverageSession = new allDataUser.UserProfileAverageSession(activity)    
    console.log("voici les données formatées :", userProfileAverageSession)

    return userProfileAverageSession  
}

const gatheringDataPerformance = (activity) => {

    console.log("voici les données reçu en entrée de gatheringData :", activity)
    const userProfilePerformance = new allDataUser.UserProfilePerformance(activity)    
    console.log("voici les données formatées :", userProfilePerformance)

    return userProfilePerformance  
}

const allData = {
    gatheringData,
    gatheringDataActivity,
    gatheringDataAverageSession,
    gatheringDataPerformance
}

export default allData;