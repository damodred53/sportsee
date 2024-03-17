import UserProfile from "../Components/ClassUser/ClassUser"

const gatheringData = (user) => {

    console.log("voici les données reçu en entrée de gatheringData :", user)
    
        const userProfile = new UserProfile(user)
        
        console.log("voici les données formatées :", userProfile)

        return userProfile
    

    
}

export default gatheringData;