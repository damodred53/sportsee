import React, { useEffect, useState } from "react";
import ChartLine from "./ChartLine/ChartLine";
import ChartRadar from "./RadarChart/RadarChart";
import RadialChart from "./RadialBarChart/RadialBarChart.jsx";
import BarChart from "./BarChart/BarChart.jsx";
import NutrimentUser from "../NutrimentUser/NutrimentUser.jsx";
import Services from "../../Services/Services.jsx";
import Energie from "../../Assets/energy.svg";
import Proteine from "../../Assets/chicken.svg";
import Glucide from "../../Assets/apple.svg";
import Hamburger from "../../Assets/cheeseburger.svg";

const Charts = () => {

    const [dataUser, setDataUser] = useState({});
    const [Icon, setIcon] = useState([]);
    const nutriment = ["Calories", "Protéines", "Glucides", "Lipides"];

    useEffect(() => {

       const fetchData = async () => {

        const response = await Services.getUser();

        const nutriment = [
            response.calorieCount,
            response.proteinCount,
            response.carbohydrateCount,
            response.lipidCount
        ];
        setDataUser(nutriment)
       }

       const fetchIcons = () => {

        setIcon([Energie, Proteine, Glucide, Hamburger])

       }
       

       Promise.all([fetchData(), fetchIcons()]);

    }, []);

    console.log("les données contenues dans dataUser : ", dataUser)
    console.log("les données contenues dans dataIcon : ", Icon)

    return (
        <div className="chart">
            
                <BarChart />
                <ChartLine />
                <ChartRadar />
                <RadialChart />
                <div className="all_nutriment_user">
                    {dataUser && dataUser.length > 0 && ( 
                        dataUser.map((item, index) => {
                        return <NutrimentUser key={index} index={index} data={item} icone={Icon[index]} nutriment={nutriment[index]}/>; 
                        })
                    )}
                </div>
        </div>
    )
}

export default Charts;