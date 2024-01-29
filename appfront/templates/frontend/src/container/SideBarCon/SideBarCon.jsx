import React from 'react'
import './SideBarCon.css'
import Sidebar from "../../components/Sidebar/Sidebar";
import Prompt from "../../components/Prompt/Prompt";
import DropdownButtonsss from "../../components/DropdownButton/DropdownButton";
import TModels from "../../components/Turbo Models/TModels";
import PBoxes from '../../components/PBoxes/PBoxes';
function SideBarCon() {
    return (
        <>
            <div className="SideBarContainer">
                <div className="sb_con">
                    <Sidebar />
                </div>
                <div className="p_con">
                    <Prompt />
                </div>
                <div className="dd_con">
                    <DropdownButtonsss />
                </div>
                <div className="t_models">
                    <TModels />
                </div>
                <div className="PB_boxes">
                    <PBoxes />
                </div>
            </div>
        </>
    )
}

export default SideBarCon