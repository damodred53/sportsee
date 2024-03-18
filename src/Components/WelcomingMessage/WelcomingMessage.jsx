import React from "react";
import Services from "../../Services/Services.jsx";
import { useEffect, useState } from "react";

const WelcomingMessage = () => {

    const [name, setName] = useState([]);
    const [error, setError] = useState(null)

    const fetchNameUser = async () => { 

        try {

            const result = await Services.getUser()
            const resultName = result.firstName;
            setName(resultName);
        } catch (error) {
            console.log("impossible d'afficher le nom de la personne", error)
            setError(true)
        }
        }

    useEffect(() => {
        fetchNameUser()
    }, [])

    console.log(name)
    return (
        <div className="welcoming">
            <h1 className="welcoming_title">Bonjour <span className="welcoming_title_name" >{name}</span></h1>
            <h3 className="welcoming_subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
            {error ? 
                <p className="welcoming_error">Impossible d'afficher les données de l'utilisateur</p>
             : ""}
            
        </div>
    )
}

export default WelcomingMessage;