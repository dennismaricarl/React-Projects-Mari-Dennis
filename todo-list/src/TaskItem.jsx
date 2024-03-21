import React from "react";
import { Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskItem({ msg, handleEdit, handleDelete }) {
  return (
    <div className="listItem">
      <Typography fontFamily="Georgia">{msg}</Typography>
      <div style={{ marginLeft: "auto" }}>
        <IconButton onClick={() => handleEdit(msg)}>
          <EditIcon className="editIcon" />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon className="deleteIcon" />
        </IconButton>
      </div>
    </div>
  );
}

export default TaskItem;
