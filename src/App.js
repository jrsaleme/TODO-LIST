import React from 'react';
import './TodoCounter.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Comprar cebolla', completed: false},
  {text: 'Migrar a react', completed: false},
  {text: 'Aprender Angular', completed: false},
  {text: 'Comprar Mercaderia', completed: true},
  {text: 'Mercaderia', completed: false},
  {text: 'Instalar termotanque', completed: false},
  {text: 'lalalala', completed: false},
  {text: 'Vender TV BGH 50"', completed: true}
];



function App() {
    const [todos,setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');
    
    const completedTodos = todos.filter(
      todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter( 
      todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
      }
    );

    console.log('Los usuarios buscan ' + searchValue);
  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}/>
      <TodoSearch 
        searchValue ={searchValue}
        setSearchValue ={setSearchValue}
      /> 
 
      <TodoList>
       {searchedTodos.map(todo =>(
        <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />
       ))}
      </TodoList>

      <CreateTodoButton />
    
    </>
  );
}

export default App;



