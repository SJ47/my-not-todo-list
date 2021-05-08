import React from "react";

const Task = ({ description, status, num, handleClickTask }) => {
    // handle call to handleClickTask passing back the id of the task
    const onClickTask = () => {
        handleClickTask(num);
    };

    return (
        <div className="task-container round">
            <span className="task-text">{description}</span>
            <input
                type="checkbox"
                id={num}
                name="task"
                defaultChecked={status}
                onClick={onClickTask}
            />
            <label htmlFor={num} className="radio-label"></label>
        </div>
    );
};

export default Task;
