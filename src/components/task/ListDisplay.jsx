import React, { useState } from "react";
import TaskCard from "./TaskCard";

const ListDisplay = (props) => {
  const [myFilter, setMyFilter] = useState("");

  const display = props.list
    .filter((item) => {
      return item.category.includes(myFilter);
    })
    .map((item, index) => {
      return (
        <TaskCard item={item} deleteTask={props.deleteTask} index={index} />
      );
    });

  return (
    <div>
      <h2>My Tasks</h2>
      <select onChange={(e) => setMyFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Errands">Errands</option>
      </select>
      {display}
    </div>
  );
};

export default ListDisplay;
