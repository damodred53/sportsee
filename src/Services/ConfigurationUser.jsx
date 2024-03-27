import allDataUser from "../Components/ClassUser/ClassUser";
import PropTypes from "prop-types";

// fonction permettant de créer des instances des classes pour les profils d'utilisateurs à partir des données récupérées en API

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

gatheringData.propTypes = {
    user : PropTypes.object.isRequired
}
gatheringDataActivity.propTypes = {
    activity : PropTypes.object.isRequired
}
gatheringDataAverageSession.propTypes = {
    activity : PropTypes.object.isRequired
}
gatheringDataPerformance.propTypes = {
    acitvity : PropTypes.object.isRequired
}


export default allData;