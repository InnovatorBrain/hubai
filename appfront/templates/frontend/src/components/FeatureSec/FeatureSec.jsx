import React from 'react'
import './FeatureSec.css'
import images from '../../constants/images'
import { FaArrowRight } from "react-icons/fa6";

const FeatureSec = () => {
    return (
        <>
            <div className="FS_Con">
                <h1 className='FS_title'>Core features that make it valuable
                </h1>
                <div className="FS_cards_Con">
                    <div className="FS_cards">
                        <div className="FS_card_img">
                            <img src={images.featureSec1} alt="" className='FS_Images' />
                        </div>
                        <h2 className='FS_card_title'>Resource Flexibility</h2>
                        <p className='FS_card_text'>AI SaaS solutions are designed to be scalable, allowing users to adjust their needs.</p>
                        <FaArrowRight/>
                    </div>
                    <div className="FS_cards">
                        <div className="FS_card_img">
                            <img src={images.featureSec2} alt="" className='FS_Images' />
                        </div>
                        <h2 className='FS_card_title'>Managed Services</h2>
                        <p className='FS_card_text'>Providers typically handle the maintenance also patching of the infrastructure.</p>
                        <FaArrowRight/>
                    </div>
                    <div className="FS_cards">
                        <div className="FS_card_img">
                            <img src={images.featureSec3} alt="" className='FS_Images' />
                        </div>
                        <h2 className='FS_card_title'>Web-Based Access</h2>
                        <p className='FS_card_text'>Web browsers or APIs, making easy to use anywhere with an internet of the connection.</p>
                        <FaArrowRight/>
                    </div>
                    <div className="FS_cards">
                        <div className="FS_card_img">
                            <img src={images.featureSec4} alt="" className='FS_Images' />
                        </div>
                        <h2 className='FS_card_title'>Friendly Interfaces</h2>
                        <p className='FS_card_text'>user-friendly interfaces and dashboard, making is very easier for non-technical user.</p>
                        <FaArrowRight/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FeatureSec