import React from "react";

import { FiPlus } from 'react-icons/fi';

const Modal =({id ='modal', onClose = () => {}, children, image}) => {
    const handleOutsidClick = (e) => {
        if (e.target.id == id) onClose();
    };

    return(
        <div id={id} onClick={handleOutsidClick} className='modal'>
            <div className="ModalContainer">
                
                <div className="ModalWrapper">
                    <button onClick={onClose} className='close'>X</button>
              <img className="ModalImg" src={image} alt='camera' />
              <div className="ModalContent">
                {children}
                <button className="Modalbutton"> <FiPlus/> Visto</button>
              </div>
             
            </div>
            </div>
            
        </div>
    );
}

export default Modal;