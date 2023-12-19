function TodoItem(porps){
    return(
      <li>
        <span>V</span>
        <p>{porps.text}</p>
        <span>X</span>
      </li>  
    );
  }

  export {TodoItem};