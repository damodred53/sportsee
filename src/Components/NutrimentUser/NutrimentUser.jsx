import React from "react";
import PropTypes from "prop-types"


/**
 * Card permettant l'affichage des données statistiques de l'utilisateur
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.data - La valeur des données statistiques du nutriment.
 * @param {string} props.icone - Le chemin de l'icône représentant le nutriment.
 * @param {string} props.nutriment - Le nom du nutriment.
 * @param {number} props.index - L'indice du nutriment dans la liste des nutriments.
 * @returns React.JSX.Element
 */


const NutrimentUser = ({data, icone, nutriment, index}) => {


    return (
        <div className="nutriment">
            <img src={icone} className="nutriment_picture" id={`element-${index}`} alt="icone de nourriture"/>
            <div className="nutriment_indication">
                <p className="nutriment_indication_number">{nutriment === "Calories" ? `${data/1000}kCal` : `${data}g`}</p>
                <p className="nutriment_indication_category">{nutriment}</p>
            </div>
        </div>
    )
}

NutrimentUser.propTypes = {
        data : PropTypes.number.isRequired,
        icone : PropTypes.string.isRequired,
        nutriment : PropTypes.string.isRequired,
        index : PropTypes.number.isRequired
}

export default NutrimentUser;