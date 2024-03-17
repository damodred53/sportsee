import React from "react";
import Services from "../../Services/Services.jsx";
import { useEffect, useState } from "react";

const WelcomingMessage = () => {

    const [name, setName] = useState([]);

    const fetchNameUser = async () => {
        const result = await Services.getUser()
        const resultName = result.firstName;
        setName(resultName);

        }

    useEffect(() => {
        fetchNameUser()
    }, [])

    console.log(name)
    return (
        <div className="welcoming">
            <h1 className="welcoming_title">Bonjour <span className="welcoming_title_name" >{name}</span></h1>
            <h3 className="welcoming_subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    )
}

export default WelcomingMessage;