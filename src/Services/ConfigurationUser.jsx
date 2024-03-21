import allDataUser from "../Components/ClassUser/ClassUser"

const gatheringData = (user) => {


        const userProfile = new allDataUser.UserProfile(user) 


        return userProfile
      
}

const gatheringDataActivity = (activity) => {


        const userProfileActivity = new allDataUser.UserProfileActivity(activity)    


        return userProfileActivity  
}

const gatheringDataAverageSession = (activity) => {


    const userProfileAverageSession = new allDataUser.UserProfileAverageSession(activity)    


    return userProfileAverageSession  
}

const gatheringDataPerformance = (activity) => {


    const userProfilePerformance = new allDataUser.UserProfilePerformance(activity)    


    return userProfilePerformance  
}

const allData = {
    gatheringData,
    gatheringDataActivity,
    gatheringDataAverageSession,
    gatheringDataPerformance
}

export default allData;