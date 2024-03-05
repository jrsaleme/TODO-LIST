import React from 'react';
import ReactDOM from 'react-dom';
import './modalCreateTodo.css';

function Modal({ children }){
    return ReactDOM.createPortal(
       <div className='modalCreateTodo'>
            {children}
       </div>,
       document.getElementById('modal') 
    )
}

export { Modal };