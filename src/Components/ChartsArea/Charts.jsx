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

/**
 * Fonction regroupant les différents graphiques et statistiques à afficher à l'utilisateur
 * @returns React.JSX.Element
 */

const Charts = () => {

    const [dataUser, setDataUser] = useState({});
    const [Icon, setIcon] = useState([]);

    // tableau de chaine de caractères contenant les 4 nutriments à afficher sur la tableau de bord
    const nutriment = ["Calories", "Protéines", "Glucides", "Lipides"];

    /**
     * Hook permettant d'appeler la fonction getUserPerformance lors du premier render
     * puis de mettre le contenu dans un useState qui est à l'origine un tableau vide.
     */

    useEffect(() => {

       const fetchData = async () => {

        const response = await Services.getUser();

        if (response) {
            //extraction de l'objet obtenu afin de standardiser les données qui seront envoyées ensuite
        const nutrimentToAdd = [
            response.calorieCount,
            response.proteinCount,
            response.carbohydrateCount,
            response.lipidCount
        ];
        setDataUser(nutrimentToAdd)

       
       }
        }

        const fetchIcons = () => {
            setIcon([Energie, Proteine, Glucide, Hamburger])
           }

           // permet d'effectuer simultanément les deux fonctions asynchrones
       Promise.all([fetchData(), fetchIcons()]);

    }, []);

   
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