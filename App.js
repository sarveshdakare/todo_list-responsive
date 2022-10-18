import "./styles.css";
import react, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setinputList] = useState("");
  const [items, setitems] = useState([]);
  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const listOfItem = () => {
    setitems((olditems) => {
      return [...olditems, inputList];
    });
    setinputList("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItem}>+</button>

          <ol>
            <li>{inputList} </li>
            {items.map((itemval) => {
              return <ToDoList text={itemval} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
