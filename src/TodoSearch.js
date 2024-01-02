import './TodoSearch.css'
import React from "react";

function TodoSearch({searchValue,setSearchValue}){
    
    return(
        <div className='contenedor-input'>
            <input 
                placeholder="Escribe tu Tarea"
                className="TodoSearch"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
                />
        </div>
    );
}

export {TodoSearch}; 