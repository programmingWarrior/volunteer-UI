import React from "react";
import childSupport from "../../images/childSupport.png";
const Task = ({ task }) => {
  return (
    <div className="col-md-3">
      <img
        style={{ height: "300px",width:'200px' }}
        src={require(`../../images/${task.pic}`)}
        alt=""
      />
      <h3 style={{
          backgroundColor:'tomato',
          width:'200px',
    
    }}>{task.name}</h3>
    </div>
  );
};

export default Task;
