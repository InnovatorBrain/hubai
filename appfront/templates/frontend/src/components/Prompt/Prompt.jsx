import React from 'react'
import "./Prompt.css"
import images from '../../constants/images';

// Button png


function Prompt() {
  return (
    <>
      <div className="messageBox">
        <input required placeholder="Message..." type="text" id="messageInput" />
        <button id="sendButton">
          <img src={images.sendButton} alt="Send" id='prompts_send_button'/>
        </button>
      </div>
    </>
  )
}

export default Prompt