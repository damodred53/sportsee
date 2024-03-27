import React from "react";
import PropTypes from "prop-types"

/**
 * Fonction permettant l'affichage des icones sur la barre de navigation verticale
 * @param {string} param0 
 * @returns React.JSX.Element
 */

const Icon = ({source}) => {

    return (
        <div>
            <img src={source} alt="logo"></img>
        </div>
    )
}

Icon.propTypes = {
    source : PropTypes.string.isRequired
}

export default Icon;