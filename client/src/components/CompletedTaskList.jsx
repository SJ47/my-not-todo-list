import React from "react";
import CompletedTask from "./CompletedTask";

const CompletedTaskList = ({ tasks, handleClickTask, handleDeleteTask }) => {
    const allTasks = tasks.map((task) => {
        return (
            <CompletedTask
                key={task.id}
                task={task}
                handleClickTask={handleClickTask}
                handleDeleteTask={handleDeleteTask}
            />
        );
    });

    const completedTasks = allTasks.filter((completedTask) => {
        // console.log(completedTask.props.task.status);
        return completedTask.props.task.status;
    });

    return <div className="completed-tasklist-container">{completedTasks}</div>;
};

export default CompletedTaskList;
