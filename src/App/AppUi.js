import React from "react";
import { TodoCounter } from '../TodoCounter/Index';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { TodoItem } from '../TodoItem/Index';
import { TodosLoading } from '../TodosLoading/Index';
import { TodosError } from '../TodosError/Index';
import { EmptyTodos } from '../EmptyTodos/Index';
import { CreateTodoButton } from '../CreateTodoButton/Index';
import { Modal } from "../Modal/Index";
import { TodoContext } from "../TodoContext/Index";


function AppUi(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
    return (
    <>
      <TodoCounter />
      <TodoSearch  />

          <TodoList>
          {loading && 
            <>
              <TodosLoading />
            </>
          }
          {error && <TodosError />}
          {(!loading && searchedTodos === 0) && <EmptyTodos />}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
      
      {openModal && (
        <Modal>
        Funcionalidad de agregar TODO
      </Modal>
      )}

     </>
    );
};


export { AppUi };