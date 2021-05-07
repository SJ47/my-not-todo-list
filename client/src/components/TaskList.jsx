import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
    const listOfTasks = tasks.map((task) => {
        // return <li key={task.id}>{task.description}</li>;
        return (
            <Task
                key={task.id}
                num={task.id}
                description={task.description}
                status={task.status}
            />
        );
    });

    return <div className="tasklist-container">{listOfTasks}</div>;
};

export default TaskList;
