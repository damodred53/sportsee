import React from "react";
import Header from "../Components/Header/Header";
import VerticalHeader from "../Components/VerticalHeader/VerticalHeader";
import WelcomingMessage from "../Components/WelcomingMessage/WelcomingMessage.jsx";
import Charts from "../Components/ChartsArea/Charts.jsx";
import {useState, useEffect} from "react";
import Services from "../Services/Services.jsx";

/**
 * Il s'agit de la fonction permettant de rendre l'interface graphique
 * @returns React.JSX.Element
 */


const App = () => {

    const [name, setName] = useState('');
    const [error, setError] = useState(false)

    const fetchNameUser = async () => { 

        try {
            const result = await Services.getUser()
            const resultName = await result.firstName;
            setName(resultName);
        } catch (error) {
            console.log("impossible d'afficher le nom de la personne", error)
            setError(true)
        }
        }

    useEffect(() => {
        fetchNameUser()
    }, []) 

    return (
        <div className="main">
            < Header />
            < VerticalHeader />
            < WelcomingMessage name={name} error={error} />
            < Charts />
        </div>
    )
} 

export default App;