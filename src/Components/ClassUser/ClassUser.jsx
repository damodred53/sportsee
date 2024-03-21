

class UserProfile {

    

    constructor(userData) {


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

class UserProfileActivity {

    constructor (userData) {

        this.id = userData.userId
        this.sessions = userData.sessions

    }
 
}

class UserProfileAverageSession {

    constructor (userData) {

        this.id = userData.userId
        this.sessions = userData.sessions

    }
 
}

class UserProfilePerformance {

    constructor (userData) {

        this.id = userData.userId
        this.sessions = userData.data
        this.kind = userData.kind
    }
 
}

const allDataUser = {
    UserProfileActivity,
    UserProfile,
    UserProfileAverageSession,
    UserProfilePerformance
}



export default allDataUser