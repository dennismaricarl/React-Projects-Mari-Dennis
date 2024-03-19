import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import { CardContent, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send'
import DeleteIcon from '@mui/icons-material/Delete';

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
      <Card sx={{margin:57, marginTop:8, padding:5}}>
      <CardContent>
      <label>To-do List</label>
      <br />
      <div style={{display:'flex', alignItems:'center'}}>
      <TextField variant="outlined" sx={{width:3000}}
        type="text"
        placeholder="Enter task"
        value={addItem}
        onChange={(e) => setAddItem(e.target.value)}/> 
        <Button variant='contained' startIcon={<SendIcon/>} sx={{marginLeft:1, borderRadius:180}} onClick={handleSubmit}></Button>
        </div>
      {tasks.map(({ key, msg }) => (
        <div style={{display:'flex', alignItems:'center'}} key={key}>
           <p>{msg}</p>
           <Button startIcon={<DeleteIcon />} sx={{marginLeft:'auto'}}onClick={()=> handleDelete(key)}></Button> 
        </div>
        
      ))}
      </CardContent>
      </Card>
    </div>
  );
}

export default TodoList;
