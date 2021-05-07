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

    return (
        <div className="app-container">
            <Header />
            <TaskList tasks={tasks} />
            <CompletedTaskList />
            <Footer />
        </div>
    );
};

export default TasksContainer;
