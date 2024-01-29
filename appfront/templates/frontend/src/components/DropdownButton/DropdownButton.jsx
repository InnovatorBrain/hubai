import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./DropdownButton.css"

import React from 'react'

function DropdownButtonsss() {
    return (
        <DropdownButton id="dropdown-basic-button" title="Chose Model">
            <Dropdown.Item href="#/action-1">OpenAi</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Claude</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Gemini Ai</Dropdown.Item>
        </DropdownButton>
    )
}

export default DropdownButtonsss