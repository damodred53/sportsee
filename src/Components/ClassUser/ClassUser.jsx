

class UserProfile {

    

    constructor(userData) {

        console.log("je suis passé par ici : ", userData)

        this.id = userData.id
        this.firstName = userData.userInfos.firstName
        this.lastname = userData.userInfos.lastName
        this.age = userData.userInfos.age
        this.score = userData.todayScore !== undefined ? userData.todayScore : userData.score
        this.calorieCount = userData.keyData.calorieCount 
        this.proteinCount = userData.keyData.proteinCount
        this.carbohydrateCount = userData.keyData.carbohydrateCount
        this.lipidCount = userData.keyData.lipidCount
    }

    getFirstName() {
        return this.firstName;
    }

    
}

export default UserProfile;