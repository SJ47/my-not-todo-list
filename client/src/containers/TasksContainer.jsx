import React, { useState, useEffect } from "react";
import CompletedTaskList from "../components/CompletedTaskList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TasksService from "../services/TasksService";

const TasksContainer = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks on first render
    useEffect(() => {
        TasksService.getTasks().then((tasks) => setTasks(tasks));
    }, []);

    // handle when unchecked task is clicked in main task window
    const handleClickTask = (selectedTaskId) => {
        // Map through tasks and toggle task status
        const updatedTasks = tasks.map((task) => {
            if (task.id === selectedTaskId) {
                task.status = !task.status;
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="app-container">
            <Header />
            <TaskList tasks={tasks} handleClickTask={handleClickTask} />
            <CompletedTaskList />
            <Footer />
        </div>
    );
};

export default TasksContainer;
