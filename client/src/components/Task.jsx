import React, { useState } from "react";

// const Task = ({ description, status, num, handleClickTask }) => {
const Task = ({ task, handleClickTask, handleUpdateTask }) => {
    const [desc, setDesc] = useState(task.description);

    // handle call to handleClickTask passing back the id of the task
    const onClickTask = () => {
        handleClickTask(task);
    };

    // handle changing text in the input field as description is typed up
    const handleDescriptionChange = (event) => {
        setDesc(event.target.value);
    };

    // handle updating the task in state after form submitted or tabbed out field and if chance of description
    const handleDescriptionSubmit = (event) => {
        event.preventDefault();
        if (task.description !== desc) {
            task.description = desc;
            handleUpdateTask(task);
        }
    };

    return (
        <div className="task-container round">
            <form
                onBlur={handleDescriptionSubmit}
                onSubmit={handleDescriptionSubmit}
            >
                <input
                    type="text"
                    value={desc}
                    className="task-text"
                    onChange={handleDescriptionChange}
                />
                <input
                    type="checkbox"
                    id={task._id}
                    name="task"
                    defaultChecked={task.status}
                    onClick={onClickTask}
                />
                <label htmlFor={task._id} className="radio-label"></label>
            </form>
        </div>
    );
};

export default Task;
