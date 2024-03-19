import React from "react";
import Header from "../Components/Header/Header";
import VerticalHeader from "../Components/VerticalHeader/VerticalHeader";
import Services from "../Services/Services.jsx";
import WelcomingMessage from "../Components/WelcomingMessage/WelcomingMessage.jsx";
import { useEffect, useState } from "react";
import Charts from "../Components/ChartsArea/Charts.jsx";


const App = () => {

    const [dataLineChart, setDataChartLine] = useState([])

    /*console.log("l'ensemble des données mockées :", MockedDataUser);*/
    
    const fetchData = async () => {
            const result = await Services.getUser()
            console.log( "tindin : " ,result)

            const result2 = await Services.getUserActivity()
            console.log("tindin 2 :" , result2)

            const result3 = await Services.getUserAverageSession()
            console.log("tindin 3 :" , result3)

            const result4 = await Services.getUserPerformance()
            console.log("tindin 4 :" , result4)
            setDataChartLine(result3)
    }

    

    useEffect(() => {
        fetchData()
        
    }, [])


    return (
        <div className="main">
            < Header />
            <VerticalHeader />
            < WelcomingMessage />
            <Charts  />
        </div>
    )
} 

export default App;