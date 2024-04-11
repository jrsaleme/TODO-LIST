import React from "react";  
import './todoform.css';
import { TodoContext } from "../TodoContext/Index";

function TodoForm (){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
        //console.log(event.target.value);
    }
    return (
        
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Hacer Ejercicio">    
            </textarea>
            <div className="TodoForm-buttonContainer" >
                <button 
                    type="button"
                    onClick={onCancel} 
                    className="TodoForm-button TodoForm-button--cancel">Cancelar
                </button>
                <button 
                    type="sumbit" 
                    className="TodoForm-button TodoForm-button--add">Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}
