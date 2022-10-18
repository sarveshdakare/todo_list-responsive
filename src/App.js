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
  const deleteItems = (id) => {
    console.log("deleted");

    setitems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="innerh1">ToDo List</h1>
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
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onselect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
