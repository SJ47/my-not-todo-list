import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleClickTask, handleUpdateTask }) => {
    const allTasks = tasks.map((task) => {
        return (
            <Task
                key={task.id}
                task={task}
                handleClickTask={handleClickTask}
                handleUpdateTask={handleUpdateTask}
            />
        );
    });

    const unCcompletedTasks = allTasks.filter((unCompletedTask) => {
        // console.log(completedTask.props.task.status);
        return !unCompletedTask.props.task.status;
    });

    return <div className="tasklist-container">{unCcompletedTasks}</div>;
};

export default TaskList;
