import React from "react";
import { TodoCounter } from '../TodoCounter/Index';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { TodoItem } from '../TodoItem/Index';
import { CreateTodoButton } from '../CreateTodoButton/Index';


function AppUi({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,    
    deleteTodo
    }
){
    
    return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {loading && <p>Estamos Cargando...</p> }
        {error && <p>Estas teniendo un Error!</p>}
        {(!loading && searchedTodos === 0) && <p>Crea tu primer TODO!</p>}

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
      
      <CreateTodoButton />
     </>
    );
};
export { AppUi };