import React from "react";



const NutrimentUser = ({data, icone, nutriment, index}) => {

    console.log("voici les datas arrivées dans mon composant icone : ", icone)


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
export default NutrimentUser;