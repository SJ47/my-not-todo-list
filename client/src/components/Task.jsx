import React, { useState } from "react";

// const Task = ({ description, status, num, handleClickTask }) => {
const Task = ({ task, handleClickTask }) => {
    const [desc, setDesc] = useState(task.description);

    // handle call to handleClickTask passing back the id of the task
    const onClickTask = () => {
        handleClickTask(task);
    };

    // handle changing text in the input field as description is typed up
    const handleDescriptionChange = (event) => {
        setDesc(event.target.value);
        console.log(desc);
    };

    const handleDescriptionSubmit = (event) => {
        event.preventDefault();
        if (task.description !== desc) {
            console.log("submitted text: ", desc);
            // update the task back in taskscontainer similar to handleClickTask
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
                {/* <span className="task-text">{description}</span> */}
                <input
                    type="checkbox"
                    id={task.id}
                    name="task"
                    defaultChecked={task.status}
                    onClick={onClickTask}
                />
                <label htmlFor={task.id} className="radio-label"></label>
            </form>
        </div>
    );
};

export default Task;
