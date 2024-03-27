import React from "react";
import PropTypes from "prop-types"


/**
 * Fonction gérant l'affichage du nom de l'utilisateur sur le tableau de bord
 * @param {string} name 
 * @param {boolean} error
 * @returns React.JSX.Element
 */

const WelcomingMessage = ({name, error}) => {


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

WelcomingMessage.propTypes = {
    name : PropTypes.string.isRequired,
    error : PropTypes.bool.isRequired
}

export default WelcomingMessage;