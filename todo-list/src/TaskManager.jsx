import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { CardContent, TextField, Button, Typography } from "@mui/material";
import TaskItem from "./TaskItem";

function TaskManager() {
  const initialTasks = [
    { key: 0, msg: "Walk the dog" },
    { key: 1, msg: "Wash the dishes" },
    { key: 2, msg: "Start the laundry" },
  ];
  const [tasks, setTask] = useState(initialTasks);
  const [addItem, setAddItem] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTask(storedTasks);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let newItem = { key: Date.now(), msg: addItem };
    const newTasks = [...tasks, newItem];
    addItem && setTask(newTasks);
    setAddItem("");

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function handleDelete(key) {
    const updatedTasks = tasks.filter((item) => item.key !== key);
    setTask(updatedTasks);
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function handleEdit(key) {
    const specificItem = tasks.find((item) => item.msg === key);
    setAddItem(specificItem.msg);

    const updatedList = tasks.filter((item) => item.msg !== key);
    setTask([...updatedList]);
  }

  function handleToggle(key) {
    const toggle = (oldTasks) =>
      oldTasks.map((task) =>
        task.key === key ? { ...task, checked: !task.checked } : task
      );

    const updatedItems = toggle(tasks);
    //invoke the toggle function and pass tasks as an argument
    //toggle(tasks) executes the toggle function with the current tasks array
    //and it returns a new array of tasks where the checked state is toggled for the task with the provided key.

    setTask(updatedItems);

    localStorage.setItem("tasks", JSON.stringify(updatedItems));
  }

  return (
    <div>
      <Card sx={{ ml: 50, mr: 50, mt: 15, mb: 20, padding: 5 }}>
        <CardContent>
          <Typography fontFamily="Georgia" fontSize={50} textAlign="center">
            To Do List
          </Typography>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              sx={{ width: 3000, mb: 3 }}
              type="text"
              placeholder="Enter task"
              value={addItem}
              onChange={(e) => setAddItem(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ mb: 3, padding: 1 }}
              onClick={handleSubmit}
            >
              <Typography fontFamily="Georgia" fontSize={25}>
                +
              </Typography>
            </Button>
          </div>
          <div style={{ display: "inline-flex" }}></div>
          {tasks &&
            tasks.map(({ key, msg }) => (
              <TaskItem
                key={key}
                msg={msg}
                checked={
                  tasks.find((task) => task.key === key)?.checked || false
                }
                //optional chaining. does task.key===key exists or is undefined? only if it exists will
                //it access the property .checked.
                handleEdit={() => handleEdit(msg)}
                handleDelete={() => handleDelete(key)}
                handleToggle={() => handleToggle(key)}
              />
            ))}
          <h4 onClick={() => setTask("")}>clear all items</h4>
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskManager;
