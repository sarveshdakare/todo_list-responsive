import react from "react";
import App from "./App";

const ToDoList = (props) => {
  const deleteItems = (props) => {
    console.log("deleted");
  };

  return (
    <>
      <div className="todo_list">
        <li>
          <button
            class="fa fa-times"
            onClick={() => {
              props.onselect(props.id);
            }}
          ></button>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ToDoList;
