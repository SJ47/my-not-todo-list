import React from "react";

const Task = ({ description, status, num }) => {
    return (
        <div className="task-container round">
            <span className="task-text">{description}</span>
            <input
                type="checkbox"
                id={num}
                name="task"
                defaultChecked={status}
            />
            <label htmlFor={num} className="radio-label"></label>
        </div>
    );
};

export default Task;
