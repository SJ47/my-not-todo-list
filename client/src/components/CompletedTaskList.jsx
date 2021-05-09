import React from "react";
import CompletedTask from "./CompletedTask";

const CompletedTaskList = ({ tasks, handleClickTask, handleDeleteTask }) => {
    const allTasks = tasks.map((task) => {
        return (
            <CompletedTask
                key={task._id}
                task={task}
                handleClickTask={handleClickTask}
                handleDeleteTask={handleDeleteTask}
            />
        );
    });

    const completedTasks = allTasks.filter((completedTask) => {
        return completedTask.props.task.status;
    });

    return (
        <div className="completed-tasklist-container">
            <h4 className="tasks-header">Completed tasks</h4>
            {completedTasks}
        </div>
    );
};

export default CompletedTaskList;
