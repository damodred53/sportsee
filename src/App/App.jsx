import React from "react";
import Header from "../Components/Header/Header";
import VerticalHeader from "../Components/VerticalHeader/VerticalHeader";
import Services from "../Services/Services.jsx";
import WelcomingMessage from "../Components/WelcomingMessage/WelcomingMessage.jsx";
import { useEffect } from "react";
import MockedDataUser from "../_Datamock_/MockedData.jsx";

const App = () => {



    /*console.log("l'ensemble des données mockées :", MockedDataUser);*/
    
    /*const fetchData = async () => {
            const result = await Services.getUser()
            console.log( result)
    }

    

    useEffect(() => {
        fetchData()
        
    }, [])*/


    return (
        <div className="main">
            < Header />
            <VerticalHeader />
            < WelcomingMessage />
        </div>
    )
} 

export default App;