import React from "react";

const TaskCard = ({ item, deleteTask, index }) => {
  return (
    <div className="item-card">
      <div className="item-card-left">
        <h3>{item.task}</h3>
        <h5>{item.category}</h5>
      </div>
      <button className="small-btn" onClick={() => deleteTask(index)}>
        X
      </button>
    </div>
  );
};

export default TaskCard;
