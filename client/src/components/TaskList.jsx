import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleClickTask, handleUpdateTask }) => {
    const allTasks = tasks.map((task) => {
        return (
            <Task
                key={task._id}
                task={task}
                handleClickTask={handleClickTask}
                handleUpdateTask={handleUpdateTask}
            />
        );
    });

    const unCompletedTasks = allTasks.filter((unCompletedTask) => {
        return !unCompletedTask.props.task.status;
    });

    return (
        <div className="tasklist-container">
            <h4 className="tasks-header">Open tasks</h4>
            {unCompletedTasks}
        </div>
    );
};

export default TaskList;
