import { useState, useEffect } from "react";

function TodoList() {
  const initialTasks = [
    { key: 0, msg: "Walk the dog" },
    { key: 1, msg: "Wash the dishes" },
    { key: 2, msg: "Start the laundry" },
  ];
  const [tasks, setTask] = useState(initialTasks);
  const [addItem, setAddItem] = useState("");


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")); //retrieves tasks from local storage
    if (storedTasks) {
      setTask(storedTasks);
    }
  }, []); 
  //recall: empty dependency=> side effect will run only once when the component mounts(first rendered & inserted into the DOM)
  //updating of tasks is managed by useState + updating of localStorage to persist updated task list 

  function handleSubmit(e) {
    e.preventDefault();
    let newItem = { key: Date.now(), msg: addItem };
    const newTasks = [...tasks, newItem]
    addItem && setTask(newTasks); // here is the updating of tasks 
    setAddItem("");

    localStorage.setItem("tasks", JSON.stringify(newTasks)); //data storing/updating of localStorage to persist the updated task list
  }

  function handleDelete(key){
    const updatedTasks = (tasks.filter((item)=> item.key !== key))
    setTask(updatedTasks)
    localStorage.removeItem("tasks")
    localStorage.setItem("tasks", JSON.stringify(updatedTasks))
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
