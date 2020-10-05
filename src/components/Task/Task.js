import React from "react";
import { Link } from "react-router-dom";
import childSupport from "../../images/childSupport.png";
const Task = ({ task }) => {
  const handleTask = () => {};
  return (
    <div className="col-md-3">
      <img
        style={{ height: "300px", width: "200px" }}
        src={require(`../../images/${task.pic}`)}
        alt=""
      />
      <a href="/login">
  <h2>{task.name}</h2>
      </a>

      
    </div>
  );
};

export default Task;
