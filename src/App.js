import React from 'react';
import './TodoCounter.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Migrar a react', completed: false},
  {text: 'Aprender Angular', completed: false},
  {text: 'Comprar Maletas', completed: false}
];

function App() {
  return (
    <>
      <TodoCounter completed={5} total={10}/>
      <TodoSearch /> 
 
      <TodoList>
       {defaultTodos.map(todo =>(
        <TodoItem 
          key={todo.text}
          text={todo.text}
          /*completed={todo.completed}*/
        />
       ))}
      </TodoList>

      <CreateTodoButton />
    
    </>
  );
}

export default App;



