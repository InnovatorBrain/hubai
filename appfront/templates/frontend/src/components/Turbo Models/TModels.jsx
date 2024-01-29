import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './TModels.css'

function TModels() {
    return (
        <>
            <DropdownButton id="dropdown-basic-button" className='drop-TM' title="Access web-Turbo Models">
                <Dropdown.Item className='drop-TM-' href="#/action-1">GPT-4</Dropdown.Item>
                <Dropdown.Item className='drop-TM-' href="#/action-2">GPT-Vision</Dropdown.Item>
                <Dropdown.Item className='drop-TM-' href="#/action-3">Code-LLAMA</Dropdown.Item>
                <Dropdown.Item className='drop-TM-' href="#/action-3">Claude-2</Dropdown.Item>
                <Dropdown.Item className='drop-TM-' href="#/action-3">Claude-Instant</Dropdown.Item>
                <Dropdown.Item className='drop-TM-' href="#/action-3">Llama-2</Dropdown.Item>
            </DropdownButton>


        </>
    )
}

export default TModels