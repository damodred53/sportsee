import React from "react";
import Header from "../Components/Header/Header";
import VerticalHeader from "../Components/VerticalHeader/VerticalHeader";
import WelcomingMessage from "../Components/WelcomingMessage/WelcomingMessage.jsx";
import Charts from "../Components/ChartsArea/Charts.jsx";

/**
 * Il s'agit de la fonction permettant de rendre l'interface graphique
 * @returns React.JSX.Element
 */
const App = () => {

    

    return (
        <div className="main">
            < Header />
            < VerticalHeader />
            < WelcomingMessage />
            < Charts />
        </div>
    )
} 

export default App;