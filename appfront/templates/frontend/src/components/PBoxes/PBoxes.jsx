import React from 'react'
import "./PBoxes.css"
import { TiDocumentText } from "react-icons/ti";

function PBoxes() {
    return (
        <>
            <div className="PBContainer">
                <div className="PB_Chat_Document">
                    <a href="" className='PB_Chat_Link_id'>
                        <div>
                            <TiDocumentText className='PB_Chat_Icon' size={25} />
                        </div>
                        <div>
                            <h6 className='PB_Chat_Text'>Chat With Your Document</h6>
                            <p className='PB_Chat_Text'>pdf, doc, pptx,txt</p>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}

export default PBoxes