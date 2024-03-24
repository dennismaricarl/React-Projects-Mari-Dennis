import React from "react";
import {useState} from 'react';
import { Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from '@mui/material/Checkbox';

function TaskItem({ msg, handleEdit, handleDelete, handleToggle, checked}) {

  return (
    <div className="listItem">
      <Checkbox checked={checked} onChange={handleToggle}/>
      <Typography 
      sx={{mt:1}}
      style={{textDecoration: checked ? "line-through" : "none"}} //learned about textDecoration: linethrough today! 
      fontFamily="Georgia">
        {msg}</Typography>
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
