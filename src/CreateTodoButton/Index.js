import './ModalBackground.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="ModalBackground"
      onClick={
        /*(event) => {
           console.log('le diste click')
          console.log(event)
          console.log(event.target) */
          () => {
            setOpenModal(state => !state);
          }
        }
    >+</button>
  );
}

export { CreateTodoButton };
