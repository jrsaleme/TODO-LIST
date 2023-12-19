function TodoItem(porps){
    return(
      <li>
        <span>V{porps.completed}</span>
        <p>{porps.text}</p>
        <span>X</span>
      </li>  
    );
  }

  export {TodoItem};