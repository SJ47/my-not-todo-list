import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleClickTask }) => {
    const listOfTasks = tasks.map((task) => {
        return (
            <Task
                key={task.id}
                num={task.id}
                description={task.description}
                status={task.status}
                handleClickTask={handleClickTask}
            />
        );
    });

    return <div className="tasklist-container">{listOfTasks}</div>;
};

export default TaskList;
