import { useState } from "react";

function TodoList() {
  const initialTasks = [
    { key: 0, msg: "Walk the dog" },
    { key: 1, msg: "Wash the dishes" },
    { key: 2, msg: "Start the laundry" },
  ];
  const [tasks, setTask] = useState(initialTasks);
  const [addItem, setAddItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newItem = { key: tasks.length + 1, msg: addItem };
    addItem && setTask([...tasks, newItem]);
    setAddItem("");
  }

  function handleDelete(key){
    setTask(tasks.filter((item)=> item.key !== key))
  }

  return (
    <div>
      <label>To-do List</label>
      <br />
      <input
        type="text"
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      {tasks.map(({ key, msg }) => (
        <div key={key}>
          <ul>
            <li>{msg}  
            <button onClick={()=> handleDelete(key)}>Delete</button> 
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
