import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleClickTask, handleUpdateTask }) => {
    const listOfTasks = tasks.map((task) => {
        return (
            <Task
                key={task.id}
                task={task}
                handleClickTask={handleClickTask}
                handleUpdateTask={handleUpdateTask}
            />
        );
    });

    return <div className="tasklist-container">{listOfTasks}</div>;
};

export default TaskList;
