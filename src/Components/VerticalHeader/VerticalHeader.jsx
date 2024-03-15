import React from "react";
import Icon from "../Icons/Icons";
import Meditation from "../../Assets/meditation.svg";
import Natation from "../../Assets/natation.svg";
import Velo from "../../Assets/velo.svg";
import Haltere from "../../Assets/haltère.svg";


const VerticalHeader = () => {

    return (
        <section className="vertical">
            <nav className="vertical_div">
                <ul className="vertical_div_list">
                    <li className="vertical_div_list_icon"><Icon source={Meditation} /></li>
                    <li className="vertical_div_list_icon"><Icon source={Natation} /></li>
                    <li className="vertical_div_list_icon"><Icon source={Velo} /></li>
                    <li className="vertical_div_list_icon"><Icon source={Haltere} /></li>
                </ul>
            </nav>
            <small className="vertical_paragraph"><p>Copyright, SportSee 2020</p></small>
        </section>
    )
}
export default VerticalHeader;