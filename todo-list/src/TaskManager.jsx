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

  return (
    <div>
      <Card sx={{ margin: 57, marginTop: 8, padding: 5 }}>
        <CardContent>
          <Typography fontFamily="Georgia" fontSize={50}>
            To-do List
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
              sx={{ marginLeft: 1, mb: 2, borderRadius: 180 }}
              onClick={handleSubmit}
            >
              <Typography fontFamily="Georgia" fontSize={12}>
                Submit
              </Typography>
            </Button>
          </div>
          {tasks.map(({ key, msg }) => (
            <TaskItem
              key={key}
              msg={msg}
              handleEdit={handleEdit}
              handleDelete={() => handleDelete(key)}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskManager;
