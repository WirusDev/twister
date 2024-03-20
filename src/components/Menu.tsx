import React, { useState } from 'react';
import ModalDialogScrollable from './AddPlayers';
function Menu() {
    const [isOpen, setIsOpen] = useState(false);

return ( <div className="AppMenu absolute top-10 right-10">
      <button className='bg-main-grey p-1.5 rounded-md' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {isOpen && (
        <div className='bg-main-grey p-1.5 rounded-md'>

          <ul >
            <li className='py-1'><ModalDialogScrollable /> </li>
            <li className='py-1'><button className='w-full'>Settings</button></li>
            <li className='py-1'><button className='w-full'>Info</button> </li>
          </ul>
        </div>
      )}
    </div>
    )
}

export default Menu;