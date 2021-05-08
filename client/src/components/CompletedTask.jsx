import React from "react";

const CompletedTask = ({ task, handleClickTask, handleDeleteTask }) => {
    // handle call to handleClickTask passing back the the task
    const onClickTask = () => {
        handleClickTask(task);
    };

    // handle call to handleDeleteTask passing back the the task
    const onDeleteTask = () => {
        handleDeleteTask(task);
    };

    return (
        <div className="completed-task-container round">
            <i className="far fa-trash-alt" onClick={onDeleteTask}></i>{" "}
            <span className="completed-task-description">
                {task.description}
            </span>
            <input
                type="checkbox"
                id={task._id}
                name="task"
                defaultChecked={task.status}
                onClick={onClickTask}
            />
            <label htmlFor={task._id} className="radio-label"></label>
        </div>
    );
};

export default CompletedTask;
